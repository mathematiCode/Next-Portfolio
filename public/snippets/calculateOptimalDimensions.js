function calculateOptimalDimensions(width, height, numItems) {
  let optimalDimensions = {};
  let aspectRatio = width / height;

  let itemsPerRow = Math.floor(Math.sqrt(numItems * aspectRatio));
  let numRows = Math.ceil(numItems / itemsPerRow);

  let spacesAvailableInLastRow = itemsPerRow * numRows - numItems;
  let itemsInLastRow = itemsPerRow - spacesAvailableInLastRow;
  if (itemsInLastRow <= numRows - 1) {
    itemsPerRow++;
    numRows--;
  } else if (numRows <= spacesAvailableInLastRow) {
    itemsPerRow--;
  }

  let itemSize = Math.min(width / itemsPerRow, height / numRows);

  optimalDimensions.size = itemSize;
  optimalDimensions.itemsPerRow = itemsPerRow;
  optimalDimensions.numRows = numRows;
  return optimalDimensions;
}
