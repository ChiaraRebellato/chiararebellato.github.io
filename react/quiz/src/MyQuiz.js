import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import CheckAnswer from './CheckAnswer'

function MyQuiz() {

  const [mytime, setMytime] = useState(10);
  const [currentChoice, setChoice] = useState('');
  const [clicked, setClick] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState();

  // bootstrap
  const [show, setShow] = useState(false);


  useEffect(() => {
    /* as soon as the Component mounts the useEffect deals with a setInterval (= side effect) */

    if (mytime === 0 || clicked === true) {
      // if either the timer is up or the user submit the answer
      return;
      // the app exits the side effect and stops the timer
    };
    // -> the empty return statement needs to be declared on top of the useEffect hook otherwise it won't be executed

    const myInterval = setInterval(() => {
      setMytime((prevTime) => prevTime - 1);
    }, 1000);

    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);

  }, [mytime]);
  // useEffect mounts effect when 'mytime' changes and needs to be re-render

  function handleValueChange({ target }) {
    // set currentChoise to what the user chooses as answer
    setChoice((prev) => {
      return prev = target.value;
    });
  };

  function handleReload() {
    window.location.reload();
  };

  function handleSubmit(event) {
    event.preventDefault();

    setClick((prev) => { return prev = true });

    if (currentChoice === '') {
      alert("You cannot do this");
      handleReload();
    }

    if (currentChoice === "a") {
      setFinalAnswer((prev) => { return prev = true })
    } else {
      setFinalAnswer((prev) => { return prev = false })

    }

    setShow(true);
    // open the modal window

  };

  
  return (
    <>
      <p>Time left: {mytime} </p>

      <form action="#" id="form1" name="form1" encType="text/plain">

        <h2>So... which dessert do i like the LEAST?</h2>

        <input type="radio" name="quizAnswers" onChange={handleValueChange} value='a' id="opt1" />
        <label for="opt1"> Fruit tart </label>

        <input type="radio" name="quizAnswers" onChange={handleValueChange} value='b' id="opt2" />
        <label for="opt2"> Sacher Torte </label>

        <input type="radio" name="quizAnswers" onChange={handleValueChange} value='c' id="opt3" />
        <label for="opt3"> Birthday cake </label>

        <Button type="submit" value="Click Me" onClick={handleSubmit}>Send answer</Button>

      </form>

      <CheckAnswer getFinalAnswer={finalAnswer} timeLeft={mytime} showModal={show} />

    </>
  );
};

export default MyQuiz;