function findIdealNumColors(numerator, denominator, currentNumColors) {
  if (denominator % numerator === 0) {
    minGroupsPerCircle = denominator / numerator;
    maxGroupsPerCircle = minGroupsPerCircle;
  } else if ((denominator * 2) % numerator === 0) {
    minGroupsPerCircle = Math.ceil(denominator / numerator);
    maxGroupsPerCircle = minGroupsPerCircle;
  } else {
    minGroupsPerCircle = Math.ceil(denominator / numerator);
    maxGroupsPerCircle = minGroupsPerCircle + 1;
  }
  if (
    minGroupsPerCircle % currentNumColors === 1 ||
    maxGroupsPerCircle % currentNumColors === 1
  ) {
    return findIdealNumColors(numerator, denominator, currentNumColors + 1);
  } else {
  }
  return currentNumColors;
}
