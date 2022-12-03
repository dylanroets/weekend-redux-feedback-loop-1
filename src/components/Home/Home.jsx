//need useHistory to navigate to next page
import { useHistory } from 'react-router-dom';

function Home() {
  //This will just include a link to the first page of the survey
  let history = useHistory();
  const navigateToSurvey = () => {
    history.push('/feeling');
  };
  return (
    <div>
      <h1>Welcome to the Survey!</h1>
      <button onClick={navigateToSurvey}>Start the Survey</button>
    </div>
  );
}

export default Home;
