import React from 'react';
import Background from './Background';

const Container = ({rows, columns, gap}) => {
    return ( <div className='svg-container'>
        <svg viewBox={`0 0 ${columns * gap} ${rows * gap}`}>
        <Background rows={rows} columns={columns} gap={gap}/>

    </svg>
    </div> );
}
 
export default Container;