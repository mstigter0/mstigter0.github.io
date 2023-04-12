export class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.id = `${row}-${column}`;
    this.value = null;
  }
  setValue(value) {
    this.value = value;
  }
}
