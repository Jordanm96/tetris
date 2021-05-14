export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// FIRST Let's create our grid "Stage"
// Creating a new array with a height of 20 rows
// For each row, create an array with a width of 12
// 0 and clear tell us that there is no tetromino in there atm
  export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );
