import { PATCHES, TRACK_LENGTH, BUTTON_INCOME_AFTER, SPECIAL_PATCH_AFTER } from './patches.js';

// ── Helpers ──────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Rotate a shape 90° clockwise */
export function rotateShape(shape) {
  const rows = shape.length, cols = shape[0].length;
  const out = [];
  for (let c = 0; c < cols; c++) {
    const row = [];
    for (let r = rows - 1; r >= 0; r--) {
      row.push(shape[r][c]);
    }
    out.push(row);
  }
  return out;
}

/** Mirror a shape horizontally */
export function flipShape(shape) {
  return shape.map(row => [...row].reverse());
}

/** Get all distinct orientations (up to 8) of a shape */
export function getOrientations(shape) {
  const orientations = [];
  const seen = new Set();
  let current = shape;
  for (let flip = 0; flip < 2; flip++) {
    for (let rot = 0; rot < 4; rot++) {
      const key = JSON.stringify(current);
      if (!seen.has(key)) {
        seen.add(key);
        orientations.push(current);
      }
      current = rotateShape(current);
    }
    current = flipShape(shape);
  }
  return orientations;
}

/** Count filled cells in a shape (cells with value >= 1) */
export function shapeSize(shape) {
  let count = 0;
  for (const row of shape) for (const cell of row) if (cell >= 1) count++;
  return count;
}

// ── Board Operations ─────────────────────────────────────────

/** Check if a patch shape can be placed at (startRow, startCol) on a 9x9 board */
export function canPlace(board, shape, startRow, startCol) {
  const rows = shape.length, cols = shape[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (shape[r][c] >= 1) {
        const br = startRow + r;
        const bc = startCol + c;
        if (br < 0 || br >= 9 || bc < 0 || bc >= 9) return false;
        if (board[br][bc]) return false;
      }
    }
  }
  return true;
}

/** Place a patch on the board (mutates board). Returns new board copy. */
export function placePatch(board, shape, startRow, startCol) {
  const newBoard = board.map(row => [...row]);
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[0].length; c++) {
      if (shape[r][c] >= 1) {
        newBoard[startRow + r][startCol + c] = true;
      }
    }
  }
  return newBoard;
}

/** Find all valid placements for a shape on a board */
export function findValidPlacements(board, shape) {
  const placements = [];
  const orientations = getOrientations(shape);
  for (let oi = 0; oi < orientations.length; oi++) {
    const orient = orientations[oi];
    const rows = orient.length, cols = orient[0].length;
    for (let r = 0; r <= 9 - rows; r++) {
      for (let c = 0; c <= 9 - cols; c++) {
        if (canPlace(board, orient, r, c)) {
          placements.push({ orientation: oi, shape: orient, row: r, col: c });
        }
      }
    }
  }
  return placements;
}

/** Check if any 7x7 sub-grid is completely filled */
export function has7x7(board) {
  for (let r = 0; r <= 2; r++) {
    for (let c = 0; c <= 2; c++) {
      let full = true;
      for (let dr = 0; dr < 7 && full; dr++) {
        for (let dc = 0; dc < 7 && full; dc++) {
          if (!board[r + dr][c + dc]) full = false;
        }
      }
      if (full) return true;
    }
  }
  return false;
}

/** Count empty squares on a board */
export function countEmpty(board) {
  let count = 0;
  for (const row of board) for (const cell of row) if (!cell) count++;
  return count;
}

// ── Game State ───────────────────────────────────────────────

function makeEmptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(false));
}

function makePlayer() {
  return {
    board: makeEmptyBoard(),
    timePosition: 0,
    buttons: 5,
    hasSpecialTile: false,
    totalButtonIncome: 0,
    finishedFirst: false,
  };
}

export function createGame() {
  // Shuffle patches 0-31, then append patch 32 (the 1x2) at the end
  const shuffleable = PATCHES.filter(p => p.id !== 32);
  const shuffled = shuffle(shuffleable);
  shuffled.push(PATCHES.find(p => p.id === 32));

  // The neutral pawn starts just before the 1x2 patch (last element)
  // In circular terms: pawnIndex points to position just before the 1x2
  const pawnIndex = shuffled.length - 1; // points to the 1x2

  return {
    players: [makePlayer(), makePlayer()],
    patches: shuffled,
    pawnIndex,
    specialPatchesClaimed: [],  // tracks which SPECIAL_PATCH_AFTER positions are claimed
    specialTileClaimed: false,
    specialTileOwner: null,
    currentPlayer: 0, // player 0 goes first
    phase: 'choose_action', // choose_action | place_patch | place_special | game_over
    pendingPatch: null,       // patch being placed
    pendingSpecials: [],      // special patches to place
    turnLog: [],
    winner: null,
  };
}

// ── Turn Logic ───────────────────────────────────────────────

/** Determine which player should go next */
export function getActivePlayer(game) {
  const p0 = game.players[0].timePosition;
  const p1 = game.players[1].timePosition;
  if (p0 < p1) return 0;
  if (p1 < p0) return 1;
  // Tied: the player who arrived most recently (currentPlayer from last turn)
  return game.currentPlayer;
}

/** Get the 3 available patches (clockwise from pawn) */
export function getAvailablePatches(game) {
  const len = game.patches.length;
  if (len === 0) return [];
  const available = [];
  for (let i = 0; i < Math.min(3, len); i++) {
    const idx = (game.pawnIndex + i) % len;
    available.push({ patch: game.patches[idx], marketIndex: idx });
  }
  return available;
}

/** Check if a player can afford and place at least one of the 3 available patches */
export function canBuyAnyPatch(game, playerIdx) {
  const player = game.players[playerIdx];
  const available = getAvailablePatches(game);
  for (const { patch } of available) {
    if (player.buttons >= patch.buttonCost) {
      const placements = findValidPlacements(player.board, patch.shape);
      if (placements.length > 0) return true;
    }
  }
  return false;
}

/** Action A: Advance and receive buttons */
export function actionAdvance(game) {
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const opponent = game.players[1 - pi];

  const targetPos = Math.min(opponent.timePosition + 1, TRACK_LENGTH - 1);
  const spacesToMove = targetPos - player.timePosition;

  if (spacesToMove <= 0) {
    // Already ahead or on same space — move 1
    const newPos = Math.min(player.timePosition + 1, TRACK_LENGTH - 1);
    const moved = newPos - player.timePosition;
    player.buttons += moved;
    const oldPos = player.timePosition;
    player.timePosition = newPos;
    return resolveTimeTrackEvents(game, pi, oldPos, newPos);
  }

  player.buttons += spacesToMove;
  const oldPos = player.timePosition;
  player.timePosition = targetPos;
  return resolveTimeTrackEvents(game, pi, oldPos, targetPos);
}

/** Action B: Buy a patch (step 1: select patch from market) */
export function actionBuyPatch(game, marketIndex) {
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const patch = game.patches[marketIndex];

  if (player.buttons < patch.buttonCost) {
    return { error: 'Cannot afford this patch' };
  }

  // Move pawn to this patch's position, then remove the patch
  game.pawnIndex = marketIndex;
  game.patches.splice(marketIndex, 1);
  // Adjust pawnIndex if needed (since we removed an element)
  if (game.patches.length > 0) {
    game.pawnIndex = game.pawnIndex % game.patches.length;
  }

  player.buttons -= patch.buttonCost;

  // Set up placement phase
  game.phase = 'place_patch';
  game.pendingPatch = patch;

  return { needsPlacement: true, patch };
}

/** Action B (step 2): Place the patch on the board */
export function confirmPlacement(game, shape, row, col) {
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const patch = game.pendingPatch;

  if (!canPlace(player.board, shape, row, col)) {
    return { error: 'Invalid placement' };
  }

  player.board = placePatch(player.board, shape, row, col);
  player.totalButtonIncome += patch.buttonIncome;

  // Check 7x7 bonus
  if (!game.specialTileClaimed && has7x7(player.board)) {
    game.specialTileClaimed = true;
    game.specialTileOwner = pi;
    player.hasSpecialTile = true;
  }

  // Advance on time track
  const oldPos = player.timePosition;
  const newPos = Math.min(player.timePosition + patch.timeCost, TRACK_LENGTH - 1);
  player.timePosition = newPos;

  game.pendingPatch = null;
  game.phase = 'choose_action';

  return resolveTimeTrackEvents(game, pi, oldPos, newPos);
}

/** Process time track events (button income + special patches) */
function resolveTimeTrackEvents(game, playerIdx, oldPos, newPos) {
  const player = game.players[playerIdx];
  const events = [];

  // Check button income positions crossed
  // Use "passed through" semantics: trigger fires when moving from <= threshold to > threshold
  // Special case: position 52 is the last space, so landing on it (newPos === 52) counts as crossing
  for (const threshold of BUTTON_INCOME_AFTER) {
    const crossed = threshold === TRACK_LENGTH - 1
      ? (oldPos < threshold && newPos >= threshold)
      : (oldPos <= threshold && newPos > threshold);
    if (crossed) {
      player.buttons += player.totalButtonIncome;
      events.push({ type: 'income', amount: player.totalButtonIncome, position: threshold });
    }
  }

  // Check special patch positions crossed
  const pendingSpecials = [];
  for (const threshold of SPECIAL_PATCH_AFTER) {
    if (oldPos <= threshold && newPos > threshold && !game.specialPatchesClaimed.includes(threshold)) {
      game.specialPatchesClaimed.push(threshold);
      pendingSpecials.push(threshold);
      events.push({ type: 'special_patch', position: threshold });
    }
  }

  // If there are special patches to place, enter that phase
  if (pendingSpecials.length > 0) {
    game.pendingSpecials = pendingSpecials;
    game.phase = 'place_special';
  }

  // Check if game should end after this
  checkGameEnd(game);

  // Determine next player
  if (game.phase === 'choose_action') {
    game.currentPlayer = getActivePlayer(game);
  }

  return { events };
}

/** Place a special 1x1 patch */
export function placeSpecialPatch(game, row, col) {
  const pi = game.currentPlayer;
  const player = game.players[pi];

  if (row < 0 || row >= 9 || col < 0 || col >= 9 || player.board[row][col]) {
    return { error: 'Invalid placement for special patch' };
  }

  player.board[row][col] = true;
  game.pendingSpecials.shift();

  // Check 7x7 bonus
  if (!game.specialTileClaimed && has7x7(player.board)) {
    game.specialTileClaimed = true;
    game.specialTileOwner = pi;
    player.hasSpecialTile = true;
  }

  if (game.pendingSpecials.length === 0) {
    game.phase = 'choose_action';
    checkGameEnd(game);
    if (game.phase === 'choose_action') {
      game.currentPlayer = getActivePlayer(game);
    }
  }

  return { ok: true };
}

/** Check if both players have reached the end */
function checkGameEnd(game) {
  const p0 = game.players[0].timePosition;
  const p1 = game.players[1].timePosition;
  if (p0 >= TRACK_LENGTH - 1 && p1 >= TRACK_LENGTH - 1) {
    game.phase = 'game_over';
    calculateScores(game);
  }
  // Track who finishes first
  if (p0 >= TRACK_LENGTH - 1 && !game.players[0].finishedFirst && !game.players[1].finishedFirst) {
    game.players[0].finishedFirst = true;
  }
  if (p1 >= TRACK_LENGTH - 1 && !game.players[1].finishedFirst && !game.players[0].finishedFirst) {
    game.players[1].finishedFirst = true;
  }
}

/** Calculate final scores */
function calculateScores(game) {
  for (let i = 0; i < 2; i++) {
    const p = game.players[i];
    const empty = countEmpty(p.board);
    p.score = p.buttons + (p.hasSpecialTile ? 7 : 0) - (empty * 2);
  }

  const s0 = game.players[0].score;
  const s1 = game.players[1].score;
  if (s0 > s1) game.winner = 0;
  else if (s1 > s0) game.winner = 1;
  else {
    // Tiebreaker: who finished first
    game.winner = game.players[0].finishedFirst ? 0 : 1;
  }
}

/** Get score breakdown for a player */
export function getScoreBreakdown(player) {
  const empty = countEmpty(player.board);
  return {
    buttons: player.buttons,
    specialTileBonus: player.hasSpecialTile ? 7 : 0,
    emptyPenalty: empty * 2,
    emptySquares: empty,
    total: player.buttons + (player.hasSpecialTile ? 7 : 0) - (empty * 2),
  };
}

/** Count remaining income triggers a player will pass */
export function remainingIncomeTriggers(timePosition) {
  return BUTTON_INCOME_AFTER.filter(t => t > timePosition).length;
}
