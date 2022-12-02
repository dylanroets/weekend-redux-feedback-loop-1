//will need useDispatch and useState
import { useDispatch } from 'react-redux';

//want feeling state to be captured the onChange input
//want onClick function to:
//INCLUDE INPUT VALIDATION
//handle the dispatch(type='MAKE_COMMENT', payload: {feeling: value})
//THEN link to next page (supported)
function Feeling({ question, page }) {
  console.log(question);
  console.log(page);

  let dispatch = useDispatch();
  const runInput = () => {
    let value = document.getElementById('input-selector').value;
    console.log(value);
    if (value === '') {
      alert('You must enter an answer.');
    } else {
      dispatch({
        type: 'MAKE_COMMENT',
        payload: { page: page, value: value },
      });
    }
  };
  return (
    <div>
      <h1>{question} </h1>
      <label htmlFor="input-selector">{page}</label>
      <select
        onChange={console.log('changed selection')}
        name="feedback"
        id="input-selector"
      >
        <option value="">--Select an option--</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <button onClick={runInput}>Next</button>
    </div>
  );
  // TODO: return input and Next button
}

export default Feeling;
