//import useSElector and axios
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import edit component for review of answers
import FeedbackEdit from '../FeedbackEdit/FeedbackEdit.jsx';

import './Review.css';

function Review({ nextPage }) {
  //invoking useSelector for redux store state, useHistoy to navigate, and useDispatch to clear store
  const reduxStore = useSelector((store) => store.comment);
  const history = useHistory();
  const dispatch = useDispatch();

  //onClick Function:
  const postData = () => {
    console.log('Posting data');

    axios
      .post('/Feedback', { data: reduxStore })
      .then(() => {
        dispatch({ type: 'CLEAR_STORE' });
        history.push(nextPage);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="response">
      {/* idea of below is to componetize each answer for ease of editing conditional */}
      <h2>Review your Feedback</h2>
      <FeedbackEdit answer="Feeling" value={reduxStore.Feeling} />
      <FeedbackEdit answer="Understanding" value={reduxStore.Understanding} />
      <FeedbackEdit answer="Support" value={reduxStore.Support} />
      <FeedbackEdit answer="Comments" value={reduxStore.Comments} />
      <button id="submit" onClick={postData}>
        Submit
      </button>
    </div>
  );
}

export default Review;
