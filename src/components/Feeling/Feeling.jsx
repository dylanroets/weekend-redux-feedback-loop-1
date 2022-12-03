//will need useDispatch and useState
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//want feeling state to be captured the onChange input
//want onClick function to:
//INCLUDE INPUT VALIDATION
//handle the dispatch(type='MAKE_COMMENT', payload: {feeling: value})
//THEN link to next page (supported)
function Feeling({ question, page, nextpage }) {
  //checking incoming props
  console.log('Question:', question, 'page:', page, 'nextpage:', nextpage);

  //invoking react and redux
  let history = useHistory();
  let dispatch = useDispatch();

  //function to run on click of next
  const runInput = () => {
    let value = document.getElementById('input-selector').value;
    console.log('Answer value:', value);
    if (value === '') {
      alert('You must enter an answer.');
    } else {
      dispatch({
        type: 'MAKE_COMMENT',
        payload: { page: page, value: value },
      });
      history.push(nextpage);
    }
  };
  return (
    <div>
      <h1>{question} </h1>
      {page === 'Comments?' ? (
        <input type="text" placeholder="Comment"></input>
      ) : (
        <div>
          <label htmlFor="input-selector">{page}</label>
          <select name="feedback" id="input-selector">
            <option value="">--Select an option--</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
      )}
      <button onClick={runInput}>Next</button>
    </div>
  );
}

export default Feeling;
