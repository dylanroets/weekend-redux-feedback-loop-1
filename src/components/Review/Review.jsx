//import useSElector and axios
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//import edit component for review of answers
import FeedbackEdit from '../FeedbackEdit/FeedbackEdit.jsx';

function Review({ nextPage }) {
  //invoking useSelector for redux store state and useHistoy to navigate
  const reduxStore = useSelector((store) => store.comment);
  const history = useHistory();

  //onClick Function:
  const postData = () => {
    console.log('Posting data');
    axios
      .post('/Feedback', { data: reduxStore })
      .then(() => {
        console.log('Data Posted');
        history.push(nextPage);
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <h2>Review your Feedback</h2>
      <FeedbackEdit answer="Feeling" value={reduxStore.Feeling} />
      <FeedbackEdit answer="Understanding" value={reduxStore.Understanding} />
      <FeedbackEdit answer="Support" value={reduxStore.Supported} />
      <FeedbackEdit answer="Comments" value={reduxStore.Comments} />
      <button onClick={postData}> Submit</button>
    </div>
  );
}

export default Review;
