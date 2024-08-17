import './NewComment.css';
import { useState } from 'react';
import amyrobson from '../../../public/images/avatars/image-amyrobson.png';

function NewComment({ addNewPostInsideArray }) {
  const [inputValue, setInputValue] = useState('');

  function handleSendComment() {
    addNewPostInsideArray(inputValue);
    setInputValue('');
  }

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  return (
    
    <div id="comment-sent">
      <img src={amyrobson} alt="Reply avatar" id="avatar" />
      <input
        value={inputValue}
        onChange={handleOnChange}
        type="text"
        placeholder='Add a comment...'
      />
    
      <button onClick={handleSendComment} className='send'>SEND</button>
    </div >
  );
}

export default NewComment;
