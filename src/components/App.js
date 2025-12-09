import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button onClick={() => setFlag(true)}>Click</button>
      {flag && (
        <p>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
