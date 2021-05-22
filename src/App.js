import { Fragment, useEffect, useState } from "react";
import "./styles.css";

function usePersistentValue(initialValue) {
  return useState({
    current: initialValue
  })[0]
}

const Counter = () => {
  const [count, setCount] = useState(0);

  let timer = usePersistentValue(null)
  
  useEffect(() => {
    timer.current = window.setInterval(() => {
      setCount((c) => c + 1)
    },1000)

    return stopTimer

  },[])

  const stopTimer = () => {
   clearInterval(timer.current)
  }

  return <Fragment>
      <h1>{count}</h1>
      <button onClick={stopTimer}>Stop Timer</button>
    </Fragment>
}

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
