import {
  createGame, getActivePlayer, getAvailablePatches,
  findValidPlacements, canPlace, placePatch,
  actionAdvance, actionBuyPatch, confirmPlacement,
  placeSpecialPatch, getScoreBreakdown, countEmpty,
  rotateShape, flipShape, getOrientations, has7x7,
  remainingIncomeTriggers,
} from './engine.js';
import { PATCHES, TRACK_LENGTH, BUTTON_INCOME_AFTER, SPECIAL_PATCH_AFTER } from './patches.js';
import { executeAIMove, aiPlaceSpecialPatch } from './ai.js';

let passed = 0;
let failed = 0;
function assert(condition, msg) {
  if (condition) { passed++; }
  else { failed++; console.error(`FAIL: ${msg}`); }
}

// ── Test: Patch data integrity ───────────────────────────────
assert(PATCHES.length === 33, 'Should have 33 patches');
for (const p of PATCHES) {
  // Count 2s in shape should match buttonIncome
  let twos = 0;
  for (const row of p.shape) for (const cell of row) if (cell === 2) twos++;
  assert(twos === p.buttonIncome, `Patch ${p.id} income mismatch: shape has ${twos} buttons, declared ${p.buttonIncome}`);
}
assert(BUTTON_INCOME_AFTER.length === 9, 'Should have 9 income positions');
assert(SPECIAL_PATCH_AFTER.length === 5, 'Should have 5 special patch positions');

// ── Test: Game creation ──────────────────────────────────────
const g = createGame();
assert(g.players.length === 2, 'Should have 2 players');
assert(g.players[0].buttons === 5, 'P1 starts with 5 buttons');
assert(g.players[1].buttons === 5, 'P2 starts with 5 buttons');
assert(g.players[0].timePosition === 0, 'P1 starts at position 0');
assert(g.patches.length === 33, 'Market should have 33 patches');
assert(g.patches[g.patches.length - 1].id === 32, 'Last patch should be the 1x2 (id 32)');
assert(g.phase === 'choose_action', 'Should start in choose_action phase');

// ── Test: Available patches ──────────────────────────────────
const avail = getAvailablePatches(g);
assert(avail.length === 3, 'Should have 3 available patches');

// ── Test: Rotate shape ───────────────────────────────────────
const shape = [[1, 1, 0], [0, 1, 1]];
const rotated = rotateShape(shape);
assert(rotated.length === 3, 'Rotated shape should have 3 rows');
assert(rotated[0].length === 2, 'Rotated shape should have 2 cols');

// ── Test: Flip shape ─────────────────────────────────────────
const flipped = flipShape(shape);
assert(flipped[0][0] === 0 && flipped[0][2] === 1, 'Flip should reverse columns');

// ── Test: Orientations ───────────────────────────────────────
const orients = getOrientations([[1, 1]]);
assert(orients.length === 2, '1x2 should have 2 orientations (horizontal + vertical)');

const squareOrients = getOrientations([[1, 1], [1, 1]]);
assert(squareOrients.length === 1, '2x2 square should have 1 orientation');

// ── Test: Board placement ────────────────────────────────────
const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(false));
assert(canPlace(emptyBoard, [[1, 1]], 0, 0), 'Should place 1x2 at origin');
assert(canPlace(emptyBoard, [[1, 1]], 0, 8) === false, 'Should not place 1x2 at col 8 (overflow)');
assert(canPlace(emptyBoard, [[1, 1]], 8, 0), 'Should place 1x2 at row 8');

const board2 = placePatch(emptyBoard, [[1, 1]], 0, 0);
assert(board2[0][0] === true && board2[0][1] === true, 'Placement should fill cells');
assert(canPlace(board2, [[1]], 0, 0) === false, 'Should not overlap');

// ── Test: Valid placements ───────────────────────────────────
const placements = findValidPlacements(emptyBoard, [[1, 1]]);
assert(placements.length > 0, 'Should find valid placements for 1x2 on empty board');

// ── Test: 7x7 detection ─────────────────────────────────────
const fullBoard = Array.from({ length: 9 }, () => Array(9).fill(true));
assert(has7x7(fullBoard), 'Full board should have 7x7');
assert(has7x7(emptyBoard) === false, 'Empty board should not have 7x7');

const partialBoard = Array.from({ length: 9 }, () => Array(9).fill(false));
for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) partialBoard[r][c] = true;
assert(has7x7(partialBoard), 'Top-left 7x7 filled should detect');

// ── Test: Count empty ────────────────────────────────────────
assert(countEmpty(emptyBoard) === 81, 'Empty board has 81 empty squares');
assert(countEmpty(fullBoard) === 0, 'Full board has 0 empty squares');

// ── Test: Action Advance ─────────────────────────────────────
const g2 = createGame();
g2.currentPlayer = 0;
actionAdvance(g2);
assert(g2.players[0].timePosition === 1, 'P1 should advance to 1 (opponent at 0, so move to 0+1=1)');
assert(g2.players[0].buttons === 6, 'P1 should gain 1 button (moved 1 space)');

// ── Test: Action Advance with gap ────────────────────────────
const g3 = createGame();
g3.players[1].timePosition = 10;
g3.currentPlayer = 0;
actionAdvance(g3);
assert(g3.players[0].timePosition === 11, 'P1 should advance to 11');
assert(g3.players[0].buttons === 16, 'P1 should gain 11 buttons (5 + 11)');

// ── Test: Active player determination ────────────────────────
const g4 = createGame();
g4.players[0].timePosition = 5;
g4.players[1].timePosition = 3;
assert(getActivePlayer(g4) === 1, 'Player further behind should go');

g4.players[0].timePosition = 3;
g4.players[1].timePosition = 3;
g4.currentPlayer = 0;
assert(getActivePlayer(g4) === 0, 'Tied: current player should go');

// ── Test: Scoring ────────────────────────────────────────────
const testPlayer = {
  board: emptyBoard,
  buttons: 20,
  hasSpecialTile: false,
  totalButtonIncome: 3,
};
const breakdown = getScoreBreakdown(testPlayer);
assert(breakdown.buttons === 20, 'Score should include buttons');
assert(breakdown.emptyPenalty === 162, 'Empty penalty should be 81*2=162');
assert(breakdown.total === 20 - 162, 'Total should be buttons - penalty');

// ── Test: Remaining income triggers ──────────────────────────
assert(remainingIncomeTriggers(0) === 9, 'At pos 0, all 9 income triggers remain');
assert(remainingIncomeTriggers(52) === 0, 'At pos 52, no income triggers remain');
assert(remainingIncomeTriggers(10) === 7, 'At pos 10, 7 triggers remain (16,22,28,34,40,46,52)');

// ── Test: AI move execution ──────────────────────────────────
const g5 = createGame();
g5.currentPlayer = 1;
const aiResult = executeAIMove(g5, 'easy');
assert(aiResult.move.action === 'advance' || aiResult.move.action === 'buy', 'AI should pick advance or buy');
assert(g5.players[1].timePosition > 0 || g5.phase === 'choose_action', 'AI move should change game state');

// ── Test: Full game simulation ───────────────────────────────
const gSim = createGame();
let turns = 0;
const MAX_TURNS = 200;
while (gSim.phase !== 'game_over' && turns < MAX_TURNS) {
  if (gSim.phase === 'place_special') {
    while (gSim.pendingSpecials && gSim.pendingSpecials.length > 0) {
      const pos = aiPlaceSpecialPatch(gSim);
      placeSpecialPatch(gSim, pos.row, pos.col);
    }
    continue;
  }
  if (gSim.phase !== 'choose_action') break;
  executeAIMove(gSim, 'medium');
  if (gSim.phase === 'place_special') {
    while (gSim.pendingSpecials && gSim.pendingSpecials.length > 0) {
      const pos = aiPlaceSpecialPatch(gSim);
      placeSpecialPatch(gSim, pos.row, pos.col);
    }
  }
  turns++;
}
assert(gSim.phase === 'game_over', `Game should end (ended after ${turns} turns)`);
assert(gSim.winner === 0 || gSim.winner === 1, 'Should have a winner');
assert(gSim.players[0].score !== null, 'P1 should have a score');
assert(gSim.players[1].score !== null, 'P2 should have a score');
console.log(`Game simulation: ${turns} turns, winner: Player ${gSim.winner + 1}, scores: ${gSim.players[0].score} vs ${gSim.players[1].score}`);

// Run 5 more simulations to check stability
let simOk = true;
for (let s = 0; s < 5; s++) {
  const gs = createGame();
  let t = 0;
  while (gs.phase !== 'game_over' && t < MAX_TURNS) {
    if (gs.phase === 'place_special') {
      while (gs.pendingSpecials && gs.pendingSpecials.length > 0) {
        const pos = aiPlaceSpecialPatch(gs);
        placeSpecialPatch(gs, pos.row, pos.col);
      }
      continue;
    }
    if (gs.phase !== 'choose_action') { simOk = false; break; }
    executeAIMove(gs, s % 2 === 0 ? 'medium' : 'hard');
    if (gs.phase === 'place_special') {
      while (gs.pendingSpecials && gs.pendingSpecials.length > 0) {
        const pos = aiPlaceSpecialPatch(gs);
        placeSpecialPatch(gs, pos.row, pos.col);
      }
    }
    t++;
  }
  if (gs.phase !== 'game_over') simOk = false;
}
assert(simOk, '5 additional game simulations should all complete');

// ── Results ──────────────────────────────────────────────────
console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
