import React, { useState } from 'react';
import ReplySection from './ReplySection'; // قم بإنشاء هذا المكون لاحقاً
import './CommentWithReply.css'; // قم بربط CSS الخاص بالمكون هنا

const YourComponent = () => {
    const [showReply, setShowReply] = useState(false);

    const handleReplyClick = () => {
        setShowReply(!showReply);
    };

    return (
        <div className="main-container">
            <div className="content-section">
                <p>هنا يكون النص الرئيسي أو المحتوى الأساسي.</p>
                <button onClick={handleReplyClick} className="reply-button">Reply</button>
            </div>
            {showReply && <ReplySection />}
        </div>
    );
};

export default CommentWithReply;