//import useSElector and axios
import { useSelector } from 'react-redux';
import axios from 'axios';

function Review() {
  const reduxStore = useSelector((store) => store.comment);
  console.log('selecting:', reduxStore);
  console.log(reduxStore.Comments);

  let dataToPost = reduxStore;

  //onClick Function:
  //POST request, '/Feedback', data: {feeling: , understanding: , supported: , comments: , flagged: }
  const postData = () => {
    console.log('Posting data');
    axios
      .post('/Feedback', { data: reduxStore })
      .then()
      .catch((error) => alert(error));
  };
  //Alert for completed entry
  //Return link to homepage

  return (
    <div>
      <h2>Review your Feedback</h2>
      <p>Feeling: {reduxStore.Feeling}</p>
      <p>Understanding: {reduxStore.Understanding}</p>
      <p>Support: {reduxStore.Supported}</p>
      <p>Comments: {reduxStore.Comments}</p>
      <button onClick={postData}> Submit</button>
    </div>
  );
  //return div with p tags that contain: Feeling {store.feeling} etc

  //include submit button on bottom, run onClick
}

export default Review;
