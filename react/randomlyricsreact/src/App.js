import React from 'react';
import './App.css';
import lyrics from './lyrics';
import MyGenerator from './MyGenerator';

function App() {

  return (
    <div>

      <MyGenerator lyrics={lyrics}/>
      {/* lyrics doc passed down as props */}

    </div>
  );
}

export default App;
