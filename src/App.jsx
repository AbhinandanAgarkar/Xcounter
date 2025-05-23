import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = ()=>{
    setCount(count+1);
  }

    const handledecrement = ()=>{
    setCount(count-1);
  }

  

  return (
    <>
   <h1>Counter App</h1>
   <p>Count: {count} </p>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={handledecrement}>Decrement</button>
   </>
  )
}

export default App
