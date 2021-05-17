# Tetris
[Play](http://tetris-j.surge.sh/)

## Overview
Built using React and styled components Following [freecodecamps tutorial](https://www.youtube.com/watch?v=ZGOaCxX8HIU), I have created my version of the popular arcade game: Tetris! Built using React and styled components, I was exposed to several new ways of using react hooks and css. While very difficult to create and understand, I came out of it with a working game. I had just as much fun making this app as I did playing with the finished product.

## How to play
Use the arrows on your keyboard to move, rotate, and drop the tetrominos inside the grid to create full rows that grant you points. The game is over when the blocks stack too high and touch the top of the grid.

## Code Snippet
From useGameStatus hook: 
```
export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const linePoints = [40, 100, 300, 1200];
  
  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
    
  }, [level, linePoints, rowsCleared])

  useEffect(() => {
    calcScore();

  }, [calcScore, rowsCleared, score])
  
  return [score, setScore, rows, setRows, level, setLevel]
}
```
Styling for the game stage using styled components:
StyledStage.js
```
export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
```
Using the Styled component in Stage.js:
```
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
```
