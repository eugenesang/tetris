import React from 'react';
import Background from './Background';
import ShapeL from './shapes/ShapeL';

const Container = ({rows, columns, gap}) => {
    return ( <div className='svg-container'>
        <svg viewBox={`0 0 ${columns * gap} ${rows * gap}`}>
        <Background rows={rows} columns={columns} gap={gap}/>

        <ShapeL row={rows/2} column={0} gap={gap}  />
    </svg>
    </div> );
}
 
export default Container;