import PropTypes from 'prop-types';
import { useState } from 'react';
import './CommentItem.css';


function CommentItem(props) {
  const [count, setCount] = useState(props.likes);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(props.commentText);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  function Plus() {
    setCount(count + 1);
  }

  function Minus() {
    setCount(count - 1);
  }

  function HandleDelete() {
    setShowConfirmDialog(true);
  }

  function HandleCancelDelete() {
    setShowConfirmDialog(false);
  }

  function HandleConfirmDelete() {
    props.onDelete(props.uniqueId);
    setShowConfirmDialog(false);
  }

  function HandleReplyClick() {
    setIsReplying(!isReplying);
  }

  function HandleReplyChange(event) {
    setReplyContent(event.target.value);
  }

  function HandleReplySubmit() {
    if (replyContent.trim()) {
      props.onReply(props.uniqueId, replyContent, props.username);
      setReplyContent('');
      setIsReplying(false);
    }
  }

  function HandleEditClick() {
    setIsEditing(true);
    setEditContent(`@${props.username} ${props.commentText}`);
  }

  function HandleEditChange(event) {
    setEditContent(event.target.value);
  }

  function HandleEditSubmit() {
    if (editContent.trim()) {
      const mentionedContent = `@${props.username} ${editContent.replace(`@${props.username} `, '')}`;
      props.onEdit(props.uniqueId, mentionedContent);
      setIsEditing(false);
    }
  }

  function formatCommentText(text) {
    const regex = /@(\w+)/g;
    return text.split(regex).map((part, index) =>
      index % 2 === 1 ? <span key={index} className="mention">@{part}</span> : part
    );
  }

  return (
    

























     <div id="comment">
       <div id="vote">
         <button id="upvote" onClick={Plus}><strong>+</strong></button>
         <span id="score">{count}</span>
        <button id="downvote" onClick={Minus}><strong>-</strong></button>
       </div>
       <div id="comment-content">
         <div id="comment-header">
           <img src={props.avatar} id="avatar" alt="Avatar" />
           <span id="username">{props.username}</span>
           <span id="time">{props.time}</span>
           {props.username === "juliusomo" ? (
             <>
               <button className="Edit" onClick={HandleEditClick}><strong>Edit</strong></button>
               <button className="Delete" onClick={HandleDelete}><strong>Delete</strong></button>
            </>
          ) : (
             <button id="reply" onClick={HandleReplyClick}>
               <img src={props.icon} alt="Reply Arrow" id="reply-arrow" />
              <span><strong>{props.textIcon}</strong></span>
            </button>
          )}
         </div>
         {isEditing ? (
           <div className="edit-form">
             <textarea
               value={editContent}
               onChange={HandleEditChange}
               placeholder={`@${props.username} Edit ...`}
             />
             <button onClick={HandleEditSubmit}>Update</button>
           </div>
         ) : (
           <p id="comment-text">{formatCommentText(props.commentText)}</p>
         )}
        {isReplying && (
           <div className="reply-form">
             <textarea
               value={replyContent}
               onChange={HandleReplyChange}
               placeholder=" your reply..."
             />
            <button onClick={HandleReplySubmit}>REPLY</button>
           </div>
         )}
         {props.replies && (
           <div className="replies">
             {props.replies.map((reply) => (
               <div key={reply.id} className="reply">
                 <img src={reply.avatar} alt="Avatar" />
                <span>{reply.username}</span>
                <p>{formatCommentText(reply.commentText)}</p>               </div>
             ))}
           </div>
         )}
         {showConfirmDialog && (
           <div className="confirm-dialog">
             <h5>Delete Comment</h5>
             <p>Are you sure you want to delete this comment? this will remove the comment and can't be undone</p>
             <div id='btn'></div>
             <button className="confirm-button cancel" onClick={HandleCancelDelete}>No, Cancel</button>
             <button className="confirm-button delete" onClick={HandleConfirmDelete}>Yes, Delete</button>
         </div>
         )}
       </div>
     </div>
   );
 }

CommentItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  textIcon: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  uniqueId: PropTypes.number.isRequired, 
  onDelete: PropTypes.func.isRequired, 
  onReply: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  replies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    commentText: PropTypes.string.isRequired,
  }))
};

export default CommentItem;
