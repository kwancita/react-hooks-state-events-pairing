import React from "react"

function Card({user,com}){
    return(
        <>
            <h3>{user}</h3>
            <h4>{com}</h4>
        </>
    )
}

export default Card