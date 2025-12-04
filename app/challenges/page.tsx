import challenges from '../../data/challenges.json';
import Challenge from '../../components/Challenge';
import Navbar from '../../components/Navbar';

function ChallengesPage() {
  return (
    <>
      <Navbar />
      <h1>My Biggest Challenges so far...</h1>
      <div className="challenges">
        {challenges.map(challenge => {
          return <Challenge key={challenge.id} challenge={challenge} />;
        })}
      </div>
    </>
  );
}

export default ChallengesPage;
