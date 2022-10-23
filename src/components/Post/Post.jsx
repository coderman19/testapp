import React from "react";

const Post = ({post}) => {
    
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}</strong>
                <div>
                    {post.title}
                </div>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Post;