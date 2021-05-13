import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => {
  return (
    <div>
      {/* map thru the stage and create a row
      then map thru each row array (which has the width 12) and create the cell component
       */}
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </div>
  );
};

export default Stage;