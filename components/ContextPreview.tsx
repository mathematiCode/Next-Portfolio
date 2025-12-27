import MDXCodeBlock from './MDXCodeBlock';

function ContextPreview() {
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
    <div className="my-6 [&_pre]:rounded-lg [&_pre]:text-sm [&_code]:text-sm">
      <MDXCodeBlock className="language-jsx">{code}</MDXCodeBlock>
    </div>
  );
}

export default ContextPreview;
