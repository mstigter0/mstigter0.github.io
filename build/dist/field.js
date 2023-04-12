export class Field {
  constructor() {
    this.fieldString = "";
    this.fieldElement = document.getElementById("field");
    this.fieldArray = [];
  }
  insertField() {
    if (this.fieldElement)
      this.fieldElement.innerHTML = this.fieldString;
  }
  setFieldString(fieldString) {
    this.fieldString = fieldString;
  }
  setCellValue(cell) {
    if (cell.value === 9)
      return;
    var difference = function(a, b) {
      return Math.abs(a - b);
    };
    var value = 0;
    this.fieldArray.forEach((element) => {
      if (difference(element.column, cell.column) <= 1 && difference(element.row, cell.row) <= 1) {
        if (element.value === 9) {
          value++;
        }
      }
    });
    cell.setValue(value);
  }
  getCell(coordinates) {
    return this.fieldArray.find((cell) => cell.id === coordinates) || null;
  }
}
