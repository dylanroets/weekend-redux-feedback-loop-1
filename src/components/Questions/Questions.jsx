//will need useDispatch, useHistory and useState
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling({ question, page, nextpage }) {
  //invoking react and redux
  let history = useHistory();
  let dispatch = useDispatch();
  //using state to capture the text input in the comments page
  const [comment, setComment] = useState('');

  //function onclick of next button in non-text input components
  const runSelectorInput = () => {
    //this nabs the value that is selected in drop down
    let value = document.getElementById('input-selector').value;
    //Verify proper input
    if (value === '') {
      alert('You must enter an answer.');
    } else {
      dispatch({
        //object is seperated out into two properties and values to easily create data on dispatch
        type: 'MAKE_COMMENT',
        payload: { page: page, value: value },
      });
      history.push(nextpage);
    }
  };
  //function running commment input
  const runCommentInput = () => {
    //uses same structure, but grabs from useState of comment
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
