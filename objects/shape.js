import Box from "./box.js";


class Shape{
    constructor(){
        this.container = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        this.boxes = [
            new Box(),
            new Box(),
            new Box(),
            new Box()
        ];

        this.grid = [];
        this.top= 0;
        this.right = 0;
        this.boxes.forEach(box=>{
            this.container.appendChild(box.shape);
        })
    }


}

class LShape extends Shape{
    constructor(){
        super();

        this.grid= [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
        ];
        this.positions = [
            [
                [1, 0, 0], [1, 0, 0], [1, 1, 0]
            ],
            [
                [0, 0, 1], [1, 1, 1], [0, 0, 0]
            ],
            [
                [0, 1, 1], [0, 0, 1], [0, 0, 1]
            ],
            [
                [1, 1, 1], [0, 0, 1], [0, 0, 0]
            ]
        ]
    }
}