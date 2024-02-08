class Grid {
  constructor() {
    this.rows = 32;
    this.columns = 24;
    this.gridLines = {
        horizontal: [],
        vertical: []
    };
    this.border = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    this.backgroundColor = "#ffffff";
    this.background = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    this.shape = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    this.draw();
  }

  draw() {
    
    // draw background first
    const sB = (attributeName, attributeValue) =>
      this.background.setAttribute(attributeName, attributeValue);

    sB('height', this.rows * 10);
    sB('width', this.columns * 10);
    sB('fill', this.backgroundColor);
    sB('stroke', '#aaaaaa');
    sB('stroke-width', '1')

    const drawLine = (x1, x2, y1, y2) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", x1);
      line.setAttribute("x2", x2);
      line.setAttribute("y1", y1);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", '#dddddd');
      line.setAttribute('stroke-width', '0.5')

      return line;
    };

    const drawHorizontalLines = () => {
      const x1 = 0;
      const x2 = this.columns * 10;

      for (let i = 0; i < this.rows+1; i++) {
        const y1 = i * 10,
          y2 = i * 10;

          const line = drawLine(x1, x2, y1, y2);

          this.gridLines.horizontal.push(line)
      }
    };

    const drawVerticalLines = ()=>{
        const y1 = 0;
        const y2 = this.rows * 10;

        for(let i=0; i<this.columns + 1; i++){
            const x1 = i *10, x2 = i * 10;
            
            const line = drawLine(x1, x2, y1, y2);

            this.gridLines.vertical.push(line);
        }
    }

    drawHorizontalLines();
    drawVerticalLines();

    [this.background, ...this.gridLines.horizontal, ...this.gridLines.vertical].forEach(e=>{
        this.shape.appendChild(e);
    });

    return this.shape;
  }
}


export default Grid;