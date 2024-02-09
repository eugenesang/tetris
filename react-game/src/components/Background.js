import React from 'react';

const Line = ({ x1, y1, x2, y2, stroke = '#cfcfcf', strokeWidth = '.5' }) => {
  return <line x1={x1} x2={x2} y1={y1} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />;
};

const Rectangle = ({ x, y, height, width }) => {
  return <rect x={x} y={y} height={height} width={width} fill='#fdfdfd' stroke='gray' />;
};

const Background = ({ rows, columns, gap }) => {
  const gridLines = [];

  // Draw horizontal grid lines
  for (let i = 1; i < rows; i++) {
    const y = i * gap;
    gridLines.push(<Line key={`hLine-${i}`} x1={0} y1={y} x2={columns * gap} y2={y} />);
  }

  // Draw vertical grid lines
  for (let j = 1; j < columns; j++) {
    const x = j * gap;
    gridLines.push(<Line key={`vLine-${j}`} x1={x} y1={0} x2={x} y2={rows * gap} />);
  }

  return (
    <g>
      <Rectangle x={0} y={0} width={columns * gap} height={rows * gap} />
      {gridLines}
    </g>
  );
};

export default Background;