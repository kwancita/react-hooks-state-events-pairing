import React, {useState} from "react"
import video from "../data/video.js";
import Frame from "./Frame.js";
import Title from "./Title"
import View from "./View"
import Button from "./Button"
import Comment from "./Comment"

function App() {
  //console.log("Here's your data:", video);

  const [up, setUp] = useState(video.upvotes)
  const [down, setDown] = useState(video.downvotes)
  const [viewComment, setViewComment] = useState(true)

  function hideComment(){
    setViewComment(!viewComment)
  }

  function handleUp(){
    setUp(up+1)
  }

  function handleDown(){
    setDown(down+1)
  }

  return (
    <div className="App">
      <Frame />
      <Title title={video.title}/>
      <View view={video.views} upload={video.createdAt}/>
      <Button up={up} down={down} onUp={handleUp} onDown={handleDown}/>
      <button onClick={hideComment}>Hide Comments</button>
      <hr/>
      {viewComment? <Comment comments={video.comments}/> : null}
    </div>
  );
}

export default App;
