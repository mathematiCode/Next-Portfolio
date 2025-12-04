import challenges from '../../data/challenges.json';
import Challenge from '../../components/Challenge';

function ChallengesPage() {
  return (
    <>
      <h1>My Most Interesting Challenges</h1>
      <div className="challenges">
        {challenges.map(challenge => {
          return <Challenge key={challenge.id} challenge={challenge} />;
        })}
      </div>
    </>
  );
}

export default ChallengesPage;
