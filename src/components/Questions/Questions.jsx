//will need useDispatch and useState
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling({ question, page, nextpage }) {
  //checking incoming props
  console.log('Question:', question, 'page:', page, 'nextpage:', nextpage);

  //invoking react and redux
  let history = useHistory();
  let dispatch = useDispatch();
  const [comment, setComment] = useState('');

  //function to run on click of next in selector components
  const runSelectorInput = () => {
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
  //function running commment input
  const runCommentInput = () => {
    console.log('inCommentInput:', comment);
    dispatch({
      type: 'MAKE_COMMENT',
      payload: { page: page, value: comment },
    });
    history.push(nextpage);
  };

  return (
    <div>
      <h1>{question} </h1>
      {page === 'Comments' ? (
        <div>
          <label htmlFor="comment-input">Comments?</label>
          <input
            id="comment-input"
            type="text"
            placeholder="Comment"
            onChange={(event) => {
              console.log(event.target.value);
              setComment(event.target.value);
            }}
          ></input>
          <button onClick={runCommentInput}>Next</button>
        </div>
      ) : (
        <div>
          <label htmlFor="input-selector">{page}?</label>
          <select name="feedback" id="input-selector">
            <option value="">--Select an option--</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <button onClick={runSelectorInput}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Feeling;
