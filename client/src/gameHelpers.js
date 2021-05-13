export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// FIRST Let's create our grid "Stage"
export const createStage = () =>
  // Creating a new array with a height of 20 rows
  Array.from(Array(STAGE_HEIGHT), () =>
  // For each row, create an array with a width of 12
    // 0 and clear tell us that there is no tetromino in there atm
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
