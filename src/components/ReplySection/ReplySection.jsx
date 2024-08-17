import React from 'react';
import './ReplySection.css'; // قم بإنشاء وتنسيق CSS لهذا المكون

const ReplySection = () => {
    return (
        <div className="reply-section">
            <textarea placeholder="اكتب ردك هنا..." className="reply-textarea"></textarea>
            <button className="submit-reply-button">Submit</button>
        </div>
    );
};

export default ReplySection;
