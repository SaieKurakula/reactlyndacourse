import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(()=> {
    console.log(`${emotion}`);
  }, [emotion]);
  
  useEffect(()=> {
    console.log(`${secondary}`);
  }, [secondary]);
  
  return (
    <>
      <h1>Hello</h1>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setSecondary("crabby")}>
        crabby
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
      <button onClick={() => setEmotion("happy")}>
        Happy 
      </button>
    </>
  )
}

export default App;
