import React from "react"
import Card from "./Card"

function Comment({comments}){
    const commentList = comments.map(comment => {
        return <Card key={comment.id} user={comment.user} com={comment.comment}/>
    })
    return(
        <>
        <h3>Comments</h3>
        {commentList}
        </>
    )
}

export default Comment