import React, { useState } from 'react';
import Cell from './Cell';
import GridContext from './GridContext';

const Grid = () => {
  const [gridState, setGridState] = useState(new Array(4).fill(false));

  const toggleCell = (index) => {
    const updatedState = [...gridState];
    updatedState[index] = !updatedState[index];
    setGridState(updatedState);
  };

  const activeCount = gridState.filter(state => state).length;

  return (
    <GridContext.Provider value={{ gridState, toggleCell }}>
      <div style={{ marginBottom: '10px' }}>Count: {activeCount}</div>
      <div style={{   display: 'grid', 
                    gridTemplateColumns: '100px 100px', 
                    justifyContent: 'center', 
                    gridGap: '1px' }}>
        {gridState.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
