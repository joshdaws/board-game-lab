import {
  getAvailablePatches, findValidPlacements, actionAdvance,
  actionBuyPatch, confirmPlacement, remainingIncomeTriggers,
  countEmpty,
} from './engine.js';

// ── Easy AI: Random valid moves ──────────────────────────────

export function aiEasyMove(game) {
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const available = getAvailablePatches(game);

  // Collect affordable patches with valid placements
  const buyable = [];
  for (const { patch, marketIndex } of available) {
    if (player.buttons >= patch.buttonCost) {
      const placements = findValidPlacements(player.board, patch.shape);
      if (placements.length > 0) {
        buyable.push({ patch, marketIndex, placements });
      }
    }
  }

  // 50% chance to advance if patches available, always advance if none
  if (buyable.length === 0 || Math.random() < 0.3) {
    return { action: 'advance' };
  }

  // Pick random buyable patch and random placement
  const choice = buyable[Math.floor(Math.random() * buyable.length)];
  const placement = choice.placements[Math.floor(Math.random() * choice.placements.length)];
  return {
    action: 'buy',
    marketIndex: choice.marketIndex,
    placement,
  };
}

// ── Medium AI: Greedy heuristic ──────────────────────────────

function scorePatchForAI(patch, placements, player) {
  const remaining = remainingIncomeTriggers(player.timePosition);
  const incomeValue = patch.buttonIncome * remaining;

  // Evaluate best placement by minimizing isolated empty squares
  let bestFillScore = -Infinity;
  for (const p of placements) {
    const fillScore = evaluatePlacement(player.board, p.shape, p.row, p.col);
    if (fillScore > bestFillScore) bestFillScore = fillScore;
  }

  return incomeValue + bestFillScore * 0.5 - patch.buttonCost;
}

/** Evaluate how good a placement is (higher = better fill, fewer isolated empties) */
function evaluatePlacement(board, shape, startRow, startCol) {
  // Simulate placing
  const testBoard = board.map(r => [...r]);
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[0].length; c++) {
      if (shape[r][c] >= 1) {
        testBoard[startRow + r][startCol + c] = true;
      }
    }
  }

  // Score: count filled squares near the corners and edges (prefer compact fills)
  let score = 0;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (!testBoard[r][c]) {
        // Count filled neighbors
        let neighbors = 0;
        if (r > 0 && testBoard[r - 1][c]) neighbors++;
        if (r < 8 && testBoard[r + 1][c]) neighbors++;
        if (c > 0 && testBoard[r][c - 1]) neighbors++;
        if (c < 8 && testBoard[r][c + 1]) neighbors++;
        // Penalize isolated empties (surrounded by filled cells)
        if (neighbors >= 3) score -= 2;
        if (neighbors === 4) score -= 3;
      }
    }
  }

  // Bonus for filling from top-left corner
  const filled = 81 - countEmpty(testBoard);
  score += filled * 0.1;

  return score;
}

export function aiMediumMove(game) {
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const opponent = game.players[1 - pi];
  const available = getAvailablePatches(game);

  // Score each buyable patch
  let bestPatch = null;
  let bestScore = -Infinity;
  let bestPlacement = null;
  let bestMarketIndex = -1;

  for (const { patch, marketIndex } of available) {
    if (player.buttons >= patch.buttonCost) {
      const placements = findValidPlacements(player.board, patch.shape);
      if (placements.length > 0) {
        const score = scorePatchForAI(patch, placements, player);
        if (score > bestScore) {
          bestScore = score;
          bestPatch = patch;
          bestMarketIndex = marketIndex;
          // Find the best placement for this patch
          let bestFill = -Infinity;
          for (const p of placements) {
            const fs = evaluatePlacement(player.board, p.shape, p.row, p.col);
            if (fs > bestFill) {
              bestFill = fs;
              bestPlacement = p;
            }
          }
        }
      }
    }
  }

  // Compare buying vs advancing
  const advanceValue = Math.min(
    opponent.timePosition + 1 - player.timePosition,
    (52 - player.timePosition)
  );

  if (bestPatch && bestScore > advanceValue * 0.8) {
    return {
      action: 'buy',
      marketIndex: bestMarketIndex,
      placement: bestPlacement,
    };
  }

  return { action: 'advance' };
}

// ── Hard AI: Deeper look-ahead ───────────────────────────────

export function aiHardMove(game) {
  // For now, use medium + additional heuristics
  // Full minimax would be Phase 3+
  const pi = game.currentPlayer;
  const player = game.players[pi];
  const opponent = game.players[1 - pi];
  const available = getAvailablePatches(game);

  let bestPatch = null;
  let bestScore = -Infinity;
  let bestPlacement = null;
  let bestMarketIndex = -1;

  for (const { patch, marketIndex } of available) {
    if (player.buttons >= patch.buttonCost) {
      const placements = findValidPlacements(player.board, patch.shape);
      if (placements.length > 0) {
        const remaining = remainingIncomeTriggers(player.timePosition);
        const incomeValue = patch.buttonIncome * remaining;

        // Factor in time efficiency
        const sizePerTime = (patch.buttonIncome > 0 ? patch.buttonIncome : 0.5) *
          placements.length / patch.timeCost;

        let bestFill = -Infinity;
        let bestP = null;
        for (const p of placements) {
          const fs = evaluatePlacement(player.board, p.shape, p.row, p.col);
          if (fs > bestFill) {
            bestFill = fs;
            bestP = p;
          }
        }

        const score = incomeValue + bestFill * 0.7 - patch.buttonCost * 0.9 + sizePerTime * 0.3;
        if (score > bestScore) {
          bestScore = score;
          bestPatch = patch;
          bestMarketIndex = marketIndex;
          bestPlacement = bestP;
        }
      }
    }
  }

  const advanceValue = Math.min(
    opponent.timePosition + 1 - player.timePosition,
    (52 - player.timePosition)
  );

  if (bestPatch && bestScore > advanceValue * 0.6) {
    return {
      action: 'buy',
      marketIndex: bestMarketIndex,
      placement: bestPlacement,
    };
  }

  return { action: 'advance' };
}

/** Execute an AI move on the game state. Returns events/results. */
export function executeAIMove(game, difficulty = 'medium') {
  let move;
  switch (difficulty) {
    case 'easy': move = aiEasyMove(game); break;
    case 'hard': move = aiHardMove(game); break;
    default: move = aiMediumMove(game); break;
  }

  if (move.action === 'advance') {
    return { move, result: actionAdvance(game) };
  }

  const buyResult = actionBuyPatch(game, move.marketIndex);
  if (buyResult.error) return { move, result: buyResult };

  const placeResult = confirmPlacement(game, move.placement.shape, move.placement.row, move.placement.col);
  return { move, result: placeResult };
}

/** AI places a special 1x1 patch — pick the spot that minimizes isolated empties */
export function aiPlaceSpecialPatch(game) {
  const player = game.players[game.currentPlayer];
  let bestR = -1, bestC = -1, bestScore = -Infinity;

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (!player.board[r][c]) {
        // Score: count empty neighbors (fewer = better, fills gaps)
        let emptyNeighbors = 0;
        if (r > 0 && !player.board[r - 1][c]) emptyNeighbors++;
        if (r < 8 && !player.board[r + 1][c]) emptyNeighbors++;
        if (c > 0 && !player.board[r][c - 1]) emptyNeighbors++;
        if (c < 8 && !player.board[r][c + 1]) emptyNeighbors++;
        const score = (4 - emptyNeighbors); // prefer cells surrounded by filled
        if (score > bestScore) {
          bestScore = score;
          bestR = r;
          bestC = c;
        }
      }
    }
  }

  return { row: bestR, col: bestC };
}
