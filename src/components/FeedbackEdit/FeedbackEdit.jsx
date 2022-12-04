import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackEdit({ answer, value }) {
  console.log(answer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [editBtn, setEditBtn] = useState(false);
  const [newComment, setNewComment] = useState('');

  const switchBtnState = () => {
    console.log('in Edit btn:', editBtn);
    setEditBtn(!editBtn);
  };
  const updateComment = () => {
    console.log('updating comment:', newComment);
    dispatch({
      type: 'MAKE_COMMENT',
      payload: { page: answer, value: newComment },
    });
    setEditBtn(!editBtn);
  };
  const updateEntry = () => {
    let numInput = document.getElementById('input-selector').value;
    dispatch({
      type: 'MAKE_COMMENT',
      payload: { page: answer, value: numInput },
    });
    setEditBtn(!editBtn);
  };
  return (
    <>
      {!editBtn && (
        <div>
          <p>
            {' '}
            {answer} : {value}
          </p>
          <button onClick={switchBtnState}>Edit</button>
        </div>
      )}
      {editBtn && answer === 'Comments' && (
        <div>
          <input
            type="text"
            placeholder={value}
            onChange={(event) => setNewComment(event.target.value)}
          ></input>
          <button onClick={updateComment}>Update</button>
        </div>
      )}
      {editBtn && answer !== 'Comments' && (
        <div>
          <label htmlFor="input-selector">{answer}?</label>
          <select name="feedback" id="input-selector">
            <option value="">--Select an option--</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <button onClick={updateEntry}>Update</button>
        </div>
      )}
    </>
  );
}

export default FeedbackEdit;
