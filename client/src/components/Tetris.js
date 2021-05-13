import React from "react";
// Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
// Functional Components
import { createStage } from '../gameHelpers';

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;
