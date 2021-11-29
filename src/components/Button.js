import React from "react"

function Button({up, down, onUp, onDown}){
    console.log(down)
    return(
        <div>
            <button onClick={onUp}>{up} 👍</button>
            <button onClick={onDown}>{down} 👎</button>
        </div>
    )
}

export default Button