import React, { useEffect, useState } from 'react';
import Box from '../Box';

const ShapePosition = ({ x1, x2, x3, x4, y1, y2, y3, y4, color, gap})=>{
    return (<>
        <Box color={color} x={x1} y={y1} gap={gap} />
        <Box color={color} x={x2} y={y2} gap={gap} />
        <Box color={color} x={x3} y={y3} gap={gap} />
        <Box color={color} x={x4} y={y4} gap={gap} />
    </>)
}

const ShapeL = ({row, column, gap}) => {

    const [nextPosition, setNextPosition] = useState(1);

    const [shape, setShape] = useState();

    const grid = [[1 , 0, 0], [1, 0, 0], [1, 1, 0]];
    const color = 'blue';

    const positions = [
        grid,
        [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
        [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
        [[1, 1, 1], [1, 0, 0], [0, 0, 0]]
    ];

    let position = 2;

    useEffect(()=>{
        if(position >= positions.length){
            position = 0;
        }

        const coordinates = [];

        for(let i= 0; i< positions[position].length; i++){
            const r = positions[position][i]
            for(let j=0; j<r.length; j++){
                if(r[j]){
                    coordinates.push([
                        i*gap, j*gap
                    ])
                }
            }
        }

        const [c1, c2, c3, c4] = coordinates;

        setShape(<ShapePosition x1={c1[0]} x2={c2[0]} x3={c3[0]} x4={c4[0]} y1={c1[1]} y2={c2[1]} y3={c3[1]} y4={c4[1]} color={color} gap={gap} />)
        

    }, [nextPosition])

    onkeydown= (ev=>{
        if(ev.key === 'ArrowUp'){
            console.log(ev);
            setNextPosition(nextPosition +1)
        }
    })

    return ( <g>
        {shape}
    </g> );
}
 
export default ShapeL;