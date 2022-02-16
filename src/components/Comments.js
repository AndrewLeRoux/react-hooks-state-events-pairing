import React, {useState} from "react";
import CommentList from "./CommentList"

function Comments({video}){

    const [button, setButton] = useState(true)
    const [text, setText] = useState('Hide Comments')

    function handleClick(){
        if (button){
            setText('Show Comments')
        }
        else if (!button){
            setText('Hide Comments')
        }
        setButton(!button)

    }


    return (
        <div>
            <button onClick = {handleClick}>{text}</button>
            {button ? <CommentList video = {video}/> : ""}
        </div>
        
        
    )
}

export default Comments