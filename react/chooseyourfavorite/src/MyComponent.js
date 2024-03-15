import React, { useEffect, useState } from "react";

function MyComponent(props) {
  // MyComponent receives props from parent

  const [current, setState] = useState([]);
  // retrieve currentState and UpdatedState from 'useState' and initialize it as an empty array
  // the empty array will populate with values once buttons are clicked by the user

  function handleClick({ target }) {
    // callback function for handling 'onClick' event on buttons
    // it takes the event.target (destructured as {target}) as argument, that's to say the button's value etc.

    setState((prev) => {
      if (!prev.includes(target.value)) {
        // if the currentState array does not contain the clicked button's value
        return [...prev, target.value];
        // add the clicked button's value to the currentState array without replacing the already contained values (= previously clicked button's value)
      } else {
        return [...prev];
        // if the value is already contained in the array keep the previously added values without adding new ones
      }
    })

  }

  function handleRemoval() {
    // function that empties the previously populated list
    setState((prev) => {
      return []
      // once the button is clicked it sets the currentState to an empty array, so nothing shows anymore
    })
  }


  const [searched, setSearched] = useState('');
  // state for input field

  function handleInputChange({ target }) {
    // every time the user types something in the input field 
    setSearched((prev) => {
      return prev = target.value;
      // the current value is updated 
    });
  };

  function handleNewArtist() {
    // every time the user clicks on the button
    setState((prev) => {
      // the 'list' state get updated with the 'searched' value, that's to say the string passed by the user
      if (!prev.includes(searched)) {
        // if the currentState array does not contain the input's value
        return [...prev, searched];
        // add the user's value to the currentState array without replacing the already contained values (= previously clicked button's value)
      } else {
        return [...prev];
        // if the value is already contained in the array keep the previously added values without adding new ones
      }
    });

    setSearched((prev)=>{
      return prev='';
    })

  }

  return (
    <>
      <ul>
        {
          current.map(element =>

            <li>{element}</li>

          )
        }
      </ul>

      {
        props.list.map(element =>

          <button value={element} onClick={handleClick}>{element}</button>

        )
      }

      <button onClick={handleRemoval}>Clear list</button>

      <h3>Can't find the artist you like? Add them!</h3>

      <input type="text" name="newArtist" id="newArtist" value={searched} placeholder="Typing..." onChange={handleInputChange} />
      <button onClick={handleNewArtist}>Add</button>
    </>
  )


}

export default MyComponent;