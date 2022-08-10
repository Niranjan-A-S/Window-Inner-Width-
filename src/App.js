import React, { useState, useEffect } from "react"


const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler)
  }, [])

  return (
    <div>{windowWidth}</div>
  );
}

export default App;
