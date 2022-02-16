import React, {useState} from "react";

function Video({video}){

    const videoUrl = video.embedUrl
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function updateUpvotes(){
        setUpvotes(() => upvotes + 1)
      }

      function updateDownvotes(){
        setDownvotes(() => downvotes + 1)
      }

    return (
        <div>
            <iframe
            width="919"
            height="525"
            src = {videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />

        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button onClick = {updateUpvotes}>{upvotes} 👍</button>
        <button onClick = {updateDownvotes}>{downvotes} 👎</button>
        </div>
        
    )
}

export default Video