import {Cell} from "./cell.js";
import {Field} from "./field.js";
export class Minesweeper {
  constructor(rows = 10, columns = 10, bombs = 5) {
    this.rows = rows;
    this.columns = columns;
    this.bombs = bombs;
    this.gameIsStarted = false;
    this.field = new Field();
    this.dugCells = 0;
    this.totalCells = rows * columns;
  }
  createField() {
    var fieldInput = [];
    for (let i = 0; i < this.rows; i++) {
      fieldInput.push(this.createMinesweeperRow(i));
    }
    var field = ['<table class="field"><tbody>', ...fieldInput, "</tbody></table>"];
    this.field.setFieldString(field.join(""));
  }
  createMinesweeperRow(rowIndex) {
    var tableRowInput = [];
    for (let i = 0; i < this.columns; i++) {
      tableRowInput.push(this.createColumn(rowIndex, i));
    }
    var tableRow = ["<tr>", ...tableRowInput, "</tr>"];
    return tableRow.join("");
  }
  createColumn(rowIndex, columnIndex) {
    this.field.fieldArray.push(new Cell(rowIndex, columnIndex));
    return `<td class="digable ${rowIndex}-${columnIndex}"></td>`;
  }
  setBombLocations(selectedCell) {
    console.log(selectedCell);
    this.gameIsStarted = true;
    var bomblocations = new Array();
    while (bomblocations.length < this.bombs) {
      var rowNumber = Math.floor(Math.random() * this.rows);
      var colNumber = Math.floor(Math.random() * this.columns);
      var bomblocation = `${rowNumber}-${colNumber}`;
      if (!bomblocations.includes(bomblocation) && bomblocation !== selectedCell) {
        bomblocations.push(bomblocation);
      }
    }
    this.field.fieldArray.forEach((cell) => {
      if (bomblocations.includes(cell.id)) {
        cell.setValue(9);
      }
    });
    this.generateNumbers();
  }
  generateNumbers() {
    this.field.fieldArray.forEach((cell) => {
      this.field.setCellValue(cell);
    });
    console.log(this.field.fieldArray);
  }
  dig(element) {
    var coordinates = element.classList[1];
    element.classList.replace("digable", "dug");
    var cell = this.field.getCell(coordinates);
    if (cell && cell.value !== null) {
      element.innerHTML = cell.value.toFixed(0);
    }
    if (cell && cell.value === 9) {
      window.alert("lost");
    } else {
      this.dugCells++;
    }
    ;
    if (cell && cell.value === 0) {
      this.digSurroundingCells();
    }
    this.checkFieldState();
  }
  flag(element) {
    var replaced = element.classList.replace("digable", "flag");
    if (!replaced)
      element.classList.replace("flag", "digable");
  }
  checkFieldState() {
    console.log(`${this.totalCells - this.bombs - this.dugCells}: cells left`);
    if (this.dugCells + this.bombs === this.totalCells) {
      window.alert("won");
    }
  }
  digSurroundingCells() {
  }
}
