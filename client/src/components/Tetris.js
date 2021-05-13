import React from 'react';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';
// Components


const Tetris = () => {
  return (
    <div>
      <Stage />
      <aside>
      <Display text='Score'/>
      <Display />
      <Display />
        
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;