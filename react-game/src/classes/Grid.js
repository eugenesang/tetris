class Grid{
    constructor(rows, columns){
        this.content = Array.from(Array(rows), () => new Array(columns).fill(0));
        
    }
}