import React from 'react';
import Cell from './Cell';
import { StyledStage }from './styles/StyledStage';

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {/* map thru the stage and create a row
      then map thru each row array (which has the width 12) and create the cell component
       */}
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  );
};

export default Stage;