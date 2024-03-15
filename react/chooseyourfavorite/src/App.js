import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
// import  Card  from "./Card";
// import {comments} from './comments'
import MyComponent from './MyComponent';
import { lyrics } from './lyrics';
import { Spotify } from './Spotify'

/*
import  Control  from "./Control";

function App() {
  return <Control />
}

*/

function App() {
  /*
  let randomIndex=Math.floor(Math.random()*comments.length);
  
    return (
      <div>
        <Card listOfComments={comments[randomIndex]}></Card>
      </div>
    )
    */

  /*
  const [state, setstate] = useState(0);

  // const updatedClicks=({target})=>setstate(state+1);

  const updatedClicks=()=>{
    setstate((previous)=>previous+1);
  };

  return(
    <div>
      <p>Number of clicks: {state}</p>
      <button onClick={updatedClicks}>Increase me!</button>
    </div>
  )
*/

  return (
    <div>
      <h1>Keep track of what you like!</h1>
      <h2>Click on the artist you like, you will create a list to keep track of them!</h2>
      <MyComponent list={lyrics} />
    </div>
  )
}


export default App;
