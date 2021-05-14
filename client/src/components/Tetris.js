import React from "react";
// Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
// Functional Components
import { createStage } from "../gameHelpers";
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


const Tetris = () => {

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
