export class Cell {
    row: number;
    column: number;
    id: string;


    //9 is bom 
    value: number | null;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;

        this.id = `${row}-${column}`

        this.value = null
    }

    setValue(value: number) {
        this.value = value;
    }
}