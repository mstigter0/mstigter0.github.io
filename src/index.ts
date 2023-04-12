import { Minesweeper } from "./minesweeper";

const minesweeper = new Minesweeper(8, 10, 79);

minesweeper.createField();

minesweeper.field.insertField();


if (minesweeper.field.fieldElement) {
  minesweeper.field.fieldElement.onclick = event => {

    var selectedElement = event.target as HTMLElement

    if (selectedElement.classList.contains('digable')) {
      if (event.ctrlKey) {
        minesweeper.flag(selectedElement);
      } else {
        if (!minesweeper.gameIsStarted) {
          minesweeper.setBombLocations(selectedElement.classList[1]);
        }
        minesweeper.dig(selectedElement)
      }
    } else if (selectedElement.classList.contains('flag')) {
      if (event.ctrlKey) {
        minesweeper.flag(selectedElement);
      }
    }
  }
}