// Patchwork — 33 Patch Definitions
// Shape encoding: 0 = empty, 1 = filled, 2 = filled + button income
// buttonIncome is derived from count of 2s in the shape

export const PATCHES = [
  {
    id: 0,
    shape: [[2, 2, 1], [0, 1, 0], [0, 1, 0]],
    buttonCost: 5, timeCost: 5, buttonIncome: 2,
  },
  {
    id: 1,
    shape: [[2, 0, 0, 0], [2, 1, 1, 1], [1, 0, 0, 0]],
    buttonCost: 7, timeCost: 2, buttonIncome: 2,
  },
  {
    id: 2,
    shape: [[0, 0, 0, 1], [1, 1, 1, 1], [1, 0, 0, 0]],
    buttonCost: 1, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 3,
    shape: [[0, 1, 0, 0], [1, 1, 1, 1], [0, 0, 1, 0]],
    buttonCost: 2, timeCost: 1, buttonIncome: 0,
  },
  {
    id: 4,
    shape: [[0, 2, 0], [1, 2, 1], [0, 1, 0]],
    buttonCost: 5, timeCost: 4, buttonIncome: 2,
  },
  {
    id: 5,
    shape: [[0, 1, 0, 0], [1, 2, 1, 1], [0, 1, 0, 0]],
    buttonCost: 0, timeCost: 3, buttonIncome: 1,
  },
  {
    id: 6,
    shape: [[0, 0, 1, 0, 0], [1, 1, 2, 1, 1], [0, 0, 1, 0, 0]],
    buttonCost: 1, timeCost: 4, buttonIncome: 1,
  },
  {
    id: 7,
    shape: [[2, 2, 0], [2, 1, 1], [0, 0, 1]],
    buttonCost: 8, timeCost: 6, buttonIncome: 3,
  },
  {
    id: 8,
    shape: [[1, 0, 1], [1, 1, 1], [1, 0, 1]],
    buttonCost: 2, timeCost: 3, buttonIncome: 0,
  },
  {
    id: 9,
    shape: [[2, 2, 0], [0, 2, 1], [0, 0, 1]],
    buttonCost: 10, timeCost: 4, buttonIncome: 3,
  },
  {
    id: 10,
    shape: [[0, 2, 0], [2, 1, 1], [1, 0, 1]],
    buttonCost: 3, timeCost: 6, buttonIncome: 2,
  },
  {
    id: 11,
    shape: [[2, 2], [1, 1]],
    buttonCost: 6, timeCost: 5, buttonIncome: 2,
  },
  {
    id: 12,
    shape: [[2, 1, 1, 1, 1]],
    buttonCost: 7, timeCost: 1, buttonIncome: 1,
  },
  {
    id: 13,
    shape: [[2, 1, 1, 1]],
    buttonCost: 3, timeCost: 3, buttonIncome: 1,
  },
  {
    id: 14,
    shape: [[1, 1, 1]],
    buttonCost: 2, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 15,
    shape: [[2, 1, 1, 1], [1, 0, 0, 1]],
    buttonCost: 1, timeCost: 5, buttonIncome: 1,
  },
  {
    id: 16,
    shape: [[0, 0, 2, 0], [1, 1, 1, 1]],
    buttonCost: 3, timeCost: 4, buttonIncome: 1,
  },
  {
    id: 17,
    shape: [[0, 2, 2, 0], [1, 1, 1, 1]],
    buttonCost: 7, timeCost: 4, buttonIncome: 2,
  },
  {
    id: 18,
    shape: [[0, 1, 0], [1, 1, 1]],
    buttonCost: 2, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 19,
    shape: [[1, 1, 0], [1, 1, 1]],
    buttonCost: 2, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 20,
    shape: [[2, 0, 0, 0], [2, 1, 1, 1]],
    buttonCost: 10, timeCost: 3, buttonIncome: 2,
  },
  {
    id: 21,
    shape: [[2, 2, 0, 0], [2, 1, 1, 1]],
    buttonCost: 10, timeCost: 5, buttonIncome: 3,
  },
  {
    id: 22,
    shape: [[2, 1, 0], [0, 1, 1]],
    buttonCost: 3, timeCost: 2, buttonIncome: 1,
  },
  {
    id: 23,
    shape: [[2, 2, 0], [0, 2, 1]],
    buttonCost: 7, timeCost: 6, buttonIncome: 3,
  },
  {
    id: 24,
    shape: [[1, 1, 1, 0], [0, 1, 1, 1]],
    buttonCost: 4, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 25,
    shape: [[2, 1, 1, 0], [0, 0, 1, 1]],
    buttonCost: 2, timeCost: 3, buttonIncome: 1,
  },
  {
    id: 26,
    shape: [[1, 1, 1], [1, 0, 1]],
    buttonCost: 1, timeCost: 2, buttonIncome: 0,
  },
  {
    id: 27,
    shape: [[2, 0, 0], [2, 1, 1]],
    buttonCost: 4, timeCost: 6, buttonIncome: 2,
  },
  {
    id: 28,
    shape: [[2, 0, 0], [1, 1, 1]],
    buttonCost: 4, timeCost: 2, buttonIncome: 1,
  },
  {
    id: 29,
    shape: [[1, 0], [1, 1]],
    buttonCost: 1, timeCost: 3, buttonIncome: 0,
  },
  {
    id: 30,
    shape: [[1, 0], [1, 1]],
    buttonCost: 3, timeCost: 1, buttonIncome: 0,
  },
  {
    id: 31,
    shape: [[0, 2, 1, 0], [1, 1, 1, 1], [0, 1, 1, 0]],
    buttonCost: 5, timeCost: 3, buttonIncome: 1,
  },
  // Patch 32 is the 1x2 "smallest patch" — always placed last in the ring
  {
    id: 32,
    shape: [[1, 1]],
    buttonCost: 2, timeCost: 1, buttonIncome: 0,
  },
];

// Time board constants
export const TRACK_LENGTH = 53; // positions 0–52
export const BUTTON_INCOME_POSITIONS = [5, 11, 17, 23, 29, 35, 41, 47, 53];
// "after" semantics: income triggers when crossing these thresholds
// i.e. moving from position <= X to position > X triggers income
// Internal representation uses 0-indexed: trigger at positions 4,10,16,22,28,34,40,46,52
export const BUTTON_INCOME_AFTER = [4, 10, 16, 22, 28, 34, 40, 46, 52];
export const SPECIAL_PATCH_AFTER = [19, 25, 31, 43, 49];
