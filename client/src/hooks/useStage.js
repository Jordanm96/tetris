import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {

  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = newStage => (
      newStage.reduce((ack, row) => {
        // Check to see if we need to clear the row or not
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          // unshift is adding in a blank row to the top of our grid(beginning of the array of rows)
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack
        }
        ack.push(row)
        return ack
      }, [])
    )
    const updateStage = prevStage => {
      // First clear the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        })
      });
      // Check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage(prev => updateStage(prev))
  }, [player, resetPlayer]);

  return [stage,setStage, rowsCleared]
}