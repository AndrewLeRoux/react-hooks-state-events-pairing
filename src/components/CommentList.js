import React from "react";

function CommentList({video}){
    
    const commentList = video.comments.map((comment) => {
        return <div key = {comment.id}>
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
        </div>
    })


    return (<div>
        <h1>{video.comments.length} Comments</h1>
        {commentList}
        </div>
    )
}

export default CommentList