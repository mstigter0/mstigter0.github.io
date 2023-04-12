import type { Cell } from "./cell";

export class Field {
    fieldString: string;

    fieldElement: HTMLDivElement | null
    fieldArray: Array<Cell>


    constructor() {
        this.fieldString = '';

        this.fieldElement = document.getElementById('field') as HTMLDivElement | null;
        this.fieldArray = [];
    }

    insertField() {
        if (this.fieldElement) this.fieldElement.innerHTML = this.fieldString;
    }

    setFieldString(fieldString: string) {
        this.fieldString = fieldString;
    }

    setCellValue(cell: Cell) {
        if (cell.value === 9) return;
        var difference = function (a: number, b: number) { return Math.abs(a - b); }
        var value = 0;

        this.fieldArray.forEach(element => {
            if (difference(element.column, cell.column) <= 1 && difference(element.row, cell.row) <= 1) {
                if (element.value === 9) {
                    value++;
                }
            }
        })
        cell.setValue(value);
    }

    getCell(coordinates: string) {
        return this.fieldArray.find(cell => cell.id === coordinates) || null;
    }


}