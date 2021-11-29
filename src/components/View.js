import React from "react"

function View({view, upload}){
    return(
        <small>{view} Views | Uploaded {upload}</small>
    )
}

export default View