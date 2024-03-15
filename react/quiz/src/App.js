import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MyQuiz from "./MyQuiz";

function App() {

  const [current, set]=useState();
  /* the current element is empty; once the user clicks the button the Component will be passed down */

  function handleClick(){
    set((prev)=>{
      return prev=<MyQuiz />
    })
  }

  return (
    <div>
      <Button onClick={handleClick}>Let's start</Button>
      {/* when the user clicks the button the Component is retrieved */}
      {current}
      {/* and displayed inside the current item */}

    </div>
  )
}

export default App;
