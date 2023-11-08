import React, { useContext } from 'react';
import GridContext from './GridContext';

const Cell = ({ index }) => {
  const { gridState, toggleCell } = useContext(GridContext);
  const isActive = gridState[index];
  const cellStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
    backgroundColor: isActive ? 'black' : 'white',
    transition: 'background-color 0.3s', // added transition for visual effect
  };

  return <div style={cellStyle} onClick={() => toggleCell(index)} />;
};

export default Cell;
