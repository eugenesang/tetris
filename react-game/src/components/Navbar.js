import React from 'react';

import logo from '../logo.svg';

const Navbar = ({score, nextShape}) => {
    return ( <nav>
        <div>
            <img src={logo} alt='Tetris Logo' />
        </div>
        <div>
            {nextShape}
        </div>
        <div>
            <span>Score</span> <span className='score-counter'>{score}</span>
        </div>
    </nav> );
}
 
export default Navbar;