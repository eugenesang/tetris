import React from 'react';

const Box = ({color, gap, x, y}) => {
    return ( 
        <rect height={gap} width={gap} x={x} y={y} fill={color} />
     );
}
 
export default Box;