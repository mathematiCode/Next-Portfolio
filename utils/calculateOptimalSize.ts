interface OptimalDimensions {
  size: number;
  itemsPerRow: number;
  numRows: number;
}

// Given a width and height of a container and a number of square items to fit inside of the container, this function returns the optimal size the items so that they will all fit and use as much of the available space as possible.
export function calculateOptimalSize(
  width: number,
  height: number,
  numItems: number
): OptimalDimensions {
  /**
   * For example, given a width of 900 pixels and a height of 300 pixels, the aspect ratio would be 3 (900 / 300).
   * If we wanted to fit say 100 items in a 900 by 300 container, multiplying 100 by the aspect ratio allows us to consider how to evenly distribute 300 (100*3) items within a 900 by 900 pixel square.
   * This can easily be done by taking the square root of 300 (triple the number of items we actually need)
   * to determine that we need a little over 17 items to go in each row.
   * In order to avoid overflow in the horizontal direction, I used Math.floor() method which will force the items per row to be 17.
   *
   * Since we actually only need 100 items in a 900 by 300 pixel container, we can calculate the number of rows needed with 100 / 17.
   * This results in 5.88 which really means we need 6 rows but the last row will not be filled, which is why I used Math.ceil().
   *
   * Our container has an aspect ratio of 900:300, which simplifies to 3:1. The ratio of itemsPerRow : numRows should be as close as possible to this ratio, but the function will prioritize making sure all items fully fit inside over perfecting the ratio.
   *
   * Also if there is a row with only 3 items in the last row and the last column only has 2 items, it will take the items from the last column and move them to fill in the empty space in the last row.
   *
   * If you want the items to be spaced out, multiply the width and height parameters by a scale factor less than one before passing them in.
   * TODO: Add spacing parameter(s)
   */

  let itemsPerRow: number;
  let numRows: number;

  const aspectRatio = width / height;

  itemsPerRow = Math.max(Math.floor(Math.sqrt(numItems * aspectRatio)), 1);
  numRows = Math.ceil(numItems / itemsPerRow);

  const spacesAvailableInLastRow = itemsPerRow * numRows - numItems;
  const itemsInLastRow = itemsPerRow - spacesAvailableInLastRow;

  // if there are only a few items in the last row and they could fit as another column instead AND less than half of the row is filled (which looks bad and doesn't optimize space well), we take the last row and move them to an additional column instead.
  const canSquishMoreHorizontally = itemsInLastRow <= numRows - 1;
  const lessThanHalfIsFilled = itemsInLastRow < spacesAvailableInLastRow;
  const itemsInLastColumn =
    spacesAvailableInLastRow > 0 ? numRows - 1 : numRows;
  const lastColumnCanFitInLastRow =
    itemsInLastColumn <= spacesAvailableInLastRow - 1;

  const shouldMakeOneMoreColumn =
    canSquishMoreHorizontally && lessThanHalfIsFilled;

  if (shouldMakeOneMoreColumn) {
    itemsPerRow++; // We're gonna add a column, which means more items
    numRows--; // Kill last row, we shoved it into a new last column
  } else if (lastColumnCanFitInLastRow) {
    // if I have enough space to shove the last column into the available space in the last row, this does that. This allows them to spread out more and utilize empty space.
    itemsPerRow--; // numRows... won't get bigger, we just make the items per row smaller
  }

  // Now we math.

  // Container width divided by how many we think we're gonna draw
  // But like, not vertically overflowing the height.
  const itemSize: number = Math.floor(
    Math.min(width / itemsPerRow, height / numRows)
  );

  return {
    size: itemSize,
    itemsPerRow,
    numRows,
  };
}
