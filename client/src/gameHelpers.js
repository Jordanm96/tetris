export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// FIRST Let's create our grid "Stage"
// Creating a new array with a height of 20 rows
// For each row, create an array with a width of 12
// 0 and clear tell us that there is no tetromino in there atm
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollission = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // 1. Check that we are on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game area's height (y)
          // Our tetrominos should not go under the playing grid
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move inside the game area's widthh (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we are moving to is not set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
