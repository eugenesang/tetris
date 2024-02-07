class Box{
    constructor(){
        this.alive = false;
        this.inView = false;
        this.y = -10;
        this.x = -10;
        this.height = 10;
        this.width = 10;
        this.row = 0;
        this.column = 0;
        this.color = "#000000";
        this.shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        this.drawShape();
    }

    draw(){
        this.shape.setAttribute('fill', this.color);
        this.shape.setAttribute('x', this.x);
        this.shape.setAttribute('y', this.y);
        this.shape.setAttribute('height', this.height);
        this.shape.setAttribute('width', this.width);

        return this.shape;
    }

    delete(){
        delete(this);
    }
}

export default Box;