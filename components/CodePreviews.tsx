import MDXCodeBlock from './MDXCodeBlock';

export function ContextPreview() {
  const code = `<CurrentLevelProvider>
  <GameProgressProvider>
    <BoardSquaresProvider>
      <PiecesInPlayProvider>
        <SelectedPieceProvider>
          <GameInterface />
        </SelectedPieceProvider>
      </PiecesInPlayProvider>
    </BoardSquaresProvider>
  </GameProgressProvider>
</CurrentLevelProvider>`;

  return (
    <div className="my-6 [&_pre]:rounded-lg [&_pre]:text-sm [&_pre]:text-left [&_code]:text-sm [&_code]:text-left">
      <MDXCodeBlock className="language-jsx">{code}</MDXCodeBlock>
    </div>
  );
}

export function TooManyParamsPreview() {
  const code = `
  function drawVerticalFractionBar(
  svg,
  x,
  y,
  width,
  height,
  numerator,
  denominator,
  lineThickness,
  colorFill,
  borderColor,
  background = 'none',
  `;
  return (
    <div className="my-6 [&_pre]:rounded-lg [&_pre]:text-xs [&_pre]:text-left [&_code]:text-xs [&_code]:text-left">
      <MDXCodeBlock className="language-jsx">{code}</MDXCodeBlock>
    </div>
  );
}

export function CombinatorialExplosionPreview() {
  const code = `
  const location = "board-(2,3)"
  `;
  return (
    <div className="my-6 [&_pre]:rounded-lg [&_pre]:text-md [&_pre]:text-left [&_code]:text-md [&_code]:text-left">
      <MDXCodeBlock className="language-jsx">{code}</MDXCodeBlock>
    </div>
  );
}
