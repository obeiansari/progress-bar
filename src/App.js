import React, { useState, useEffect } from 'react'
import ProgressBar from "./components/progressBar";
import "./App.css"

const App = () => {

  const [value,   setValue]   = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => {
        if (val < 100) {
          return val + 1;
        } else {
          clearInterval(interval);
          return val;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  );
}

export default App;
