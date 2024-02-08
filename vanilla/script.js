import Grid from "./objects/grid.js";


const grid = new Grid();

const svg = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'svg')[0];

svg.setAttribute('viewBox', `0 0 ${grid.columns * 10} ${grid.rows * 10}`);

svg.appendChild(grid.shape);

console.log(grid)