interface ChallengeProps {
  id: string;
  project: string;
  challenge: string;
  explanation: string;
  codeSnippet: string;
  example?: string;
}

function Challenge({ challenge }: { challenge: ChallengeProps }) {
  return (
    <div>
      <h2>{challenge.challenge}</h2>
      <p>{challenge.explanation}</p>
      <code>{challenge.codeSnippet}</code>
      {challenge.example && <a>{challenge.example}</a>}
    </div>
  );
}

export default Challenge;
