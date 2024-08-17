

//  import { useState, useEffect } from 'react';
//  import './Comment.css';

//  import CommentItem from '../CommentItem/CommentItem';
//  import ReplyIcon from '../../../public/images/icon-reply.svg';
//  import NewComment from '../NewCommet/NewComment';
//  import AmyRobsonAvatar from '../../../public/images/avatars/image-amyrobson.png';

//  function Comment() {
//     const [comments, setComments] = useState([]);

//    useEffect(() => {
//      fetch('http://localhost:3000/comments')
//        .then(response => response.json())
//        .then(data => setComments(data))
//        .catch(error => console.error('Error fetching comments:', error));
//    }, []);

//    function addNewPostInsideArray(commentContent) {
//      const newComment = {
//        avatar: AmyRobsonAvatar,
//        username: 'amyrobson',
//        time: 'just now',
//        commentText: commentContent,
//        icon: ReplyIcon,
//        textIcon: 'Reply',
//        likes: 0,
//        id: comments.length + 1,
//        replies: []
//      };
//      setComments([...comments, newComment]);
//    }

//    function handleDeleteComment(commentId) {
//      const updatedComments = comments.filter(comment => comment.id !== commentId);
//      setComments(updatedComments);
//    }

//    function handleReplyComment(commentId, replyContent, replyToUsername) {
//      const newReply = {
//        avatar: AmyRobsonAvatar,
//        username: 'amyrobson', 
//        time: 'just now',
//        commentText: `@${replyToUsername} ${replyContent}`,
//        icon: ReplyIcon,
//        textIcon: 'Reply',
//        likes: 0,
//        id: comments.length + 1
//      };

//      const updatedComments = comments.map(comment => {
//        if (comment.id === commentId) {
//          return {
//            ...comment,
//            replies: [...comment.replies, newReply]
//          };
//        }
//        return comment;
//      });

//      setComments(updatedComments);
//    }

//    function handleEditComment(commentId, newContent) {
//      const updatedComments = comments.map(comment => {
//        if (comment.id === commentId) {
//          return {
//            ...comment,
//            commentText: newContent
//          };
//        }
//        return comment;
//      });

//      setComments(updatedComments);
//    }

//    return (
//      <>
//        <div id="comment-section">
//          {comments.map((comment) => (
//            <CommentItem
//              key={comment.id}
//              uniqueId={comment.id}
//              avatar={comment.avatar}
//              username={comment.username}
//              time={comment.time}
//              commentText={comment.commentText}
//              likes={comment.likes}
//              icon={comment.icon}
//              textIcon={comment.textIcon}
//              replies={comment.replies}
//              onDelete={handleDeleteComment}
//              onReply={handleReplyComment}
//              onEdit={handleEditComment}
//            />
//          ))}
//        </div>

//        <NewComment addNewPostInsideArray={addNewPostInsideArray} />
      

//      </>
//    );
//  }

//  export default Comment;

import { useState } from 'react';
import './Comment.css';

import CommentItem from '../CommentItem/CommentItem';
import ReplyIcon from '../../../public/images/icon-reply.svg';
import NewComment from '../NewCommet/NewComment';
import AmyRobsonAvatar from '../../../public/images/avatars/image-amyrobson.png';
import ReplySection from '../ReplySection/ReplySection';

function Comment() {
  const initialComments = [
    {
      avatar: AmyRobsonAvatar,
      username: "amyrobson",
      time: "1 month ago",
      commentText: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
      icon: ReplyIcon,
      textIcon: "Reply",
      likes: 0,
      id: 1,
      replies: []
    },
    {
      avatar: AmyRobsonAvatar,
      username: "maxblagun",
      time: "2 weeks ago",
      commentText: "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      icon: ReplyIcon,
      textIcon: "Reply",
      likes: 0,
      id: 2,
      replies: []
    },
    {
      avatar: AmyRobsonAvatar,
      username: "ramsemiron",
      time: "1 week ago",
      commentText: "I could use some more help. How about you? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      icon: ReplyIcon,
      textIcon: "Reply",
      likes: 0,
      id: 3,
      replies: []
    },
    {
      avatar: AmyRobsonAvatar,
      username: "juliusomo",
      time: "2 days ago",
      commentText: "I could use some more help. How about you? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      icon: ReplyIcon,
      textIcon: "Reply",
      likes: 0,
      id: 4,
      replies: []
    }
  ];

  const [comments, setComments] = useState(initialComments);

  function addNewPostInsideArray(commentContent) {
    const newComment = {
      avatar: AmyRobsonAvatar,
      username: 'amyrobson',
      time: 'just now',
      commentText: commentContent,
      icon: ReplyIcon,
      textIcon: 'Reply',
      likes: 0,
      id: comments.length + 1,
      replies: []
    };
    setComments([...comments, newComment]);
  }

  function handleDeleteComment(commentId) {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
  }

  function handleReplyComment(commentId, replyContent, replyToUsername) {
    const newReply = {
      avatar: AmyRobsonAvatar,
      username: 'amyrobson', 
      time: 'just now',
      commentText: `@${replyToUsername} ${replyContent}`,
      icon: ReplyIcon,
      textIcon: 'Reply',
      likes: 0,
      id: comments.length + 1
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
  }

  function handleEditComment(commentId, newContent) {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          commentText: newContent
        };
      }
      return comment;
    });

    setComments(updatedComments);
  }

  return (
    <>
      <div id="comment-section">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            uniqueId={comment.id}
            avatar={comment.avatar}
            username={comment.username}
            time={comment.time}
            commentText={comment.commentText}
            likes={comment.likes}
            icon={comment.icon}
            textIcon={comment.textIcon}
            replies={comment.replies}
            onDelete={handleDeleteComment}
            onReply={handleReplyComment}
            onEdit={handleEditComment}
          />
        ))}
      </div>

      <NewComment addNewPostInsideArray={addNewPostInsideArray} />
    <ReplySection></ReplySection>
    </>
  );
}

export default Comment;
