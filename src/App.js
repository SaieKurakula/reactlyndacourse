import React, {useState} from "react"
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

export default App;
