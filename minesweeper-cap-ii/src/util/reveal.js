// CONSOLE LOG
export const revealed = (arr, x, y, newNonMinesCount) => {
    console.log(arr[x][y]);
    if (arr[x][y].revealed) {
      return;
    }
    let flipped = [];
    flipped.push(arr[x][y]);
    while (flipped.length !== 0) {
      let single = flipped.pop();
  
      if (!single.revealed) {
        newNonMinesCount--;
        single.revealed = true;
      }
  
      if (single.value !== 0) {
        break;
      }
  
      // SETTIMEOUT
      if (
        single.x > 0 &&
        single.y > 0 &&
        arr[single.x - 1][single.y - 1].value === 0 &&
        !arr[single.x - 1][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y - 1]);
      }
      if (
        single.x < arr.length - 1 &&
        single.y < arr[0].length - 1 &&
        arr[single.x + 1][single.y + 1].value === 0 &&
        !arr[single.x + 1][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y + 1]);
      }
      if (
        single.x < arr.length - 1 &&
        single.y > 0 &&
        arr[single.x + 1][single.y - 1].value === 0 &&
        !arr[single.x + 1][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y - 1]);
      }
      if (
        single.x > 0 &&
        single.y < arr[0].length - 1 &&
        arr[single.x - 1][single.y + 1].value === 0 &&
        !arr[single.x - 1][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y + 1]);
      }
  
      // SINGLE
      if (
        single.x > 0 &&
        arr[single.x - 1][single.y].value === 0 &&
        !arr[single.x - 1][single.y].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y]);
      }
      if (
        single.x < arr.length - 1 &&
        arr[single.x + 1][single.y].value === 0 &&
        !arr[single.x + 1][single.y].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y]);
      }
      if (
        single.y > 0 &&
        arr[single.x][single.y - 1].value === 0 &&
        !arr[single.x][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x][single.y - 1]);
      }
      if (
        single.y < arr[0].length - 1 &&
        arr[single.x][single.y + 1].value === 0 &&
        !arr[single.x][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x][single.y + 1]);
      }
  
      // REVEALING ITEMS
      if (
        single.x > 0 &&
        single.y > 0 &&
        !arr[single.x - 1][single.y - 1].revealed
      ) {
        //TOP LEFT REVEAL
  
        arr[single.x - 1][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
        // TOP REVEAL
        arr[single.x][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x < arr.length - 1 &&
        single.y > 0 &&
        !arr[single.x + 1][single.y - 1].revealed
      ) {
        //TOP RIGHT REVEAL
        arr[single.x + 1][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
        //LEFT REVEAL
        arr[single.x - 1][single.y].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].revealed) {
        // RIGHT REVEAL
        arr[single.x + 1][single.y].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x > 0 &&
        single.y < arr[0].length - 1 &&
        !arr[single.x - 1][single.y + 1].revealed
      ) {
        // BOTTOM LEFT REVEAL
        arr[single.x - 1][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].revealed) {
        //BOTTOM REVEAL
        arr[single.x][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x < arr.length - 1 &&
        single.y < arr[0].length - 1 &&
        !arr[single.x + 1][single.y + 1].revealed
      ) {
        // BOTTOM RIGHT REVEAL
        arr[single.x + 1][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
    }
    //   CONSOLE LOG
    return { arr, newNonMinesCount };
  };