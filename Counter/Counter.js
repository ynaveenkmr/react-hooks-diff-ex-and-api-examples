import React,{ useState} from 'react'

function Counter(){
const initialSate = 0
const [count, setCount] = useState(initialSate)


  return(
    <>
    <hr />
 Count: {count}
 <br />
<button onClick={()=>{setCount(initialSate)}}>Reset</button>
<button onClick={()=>{setCount(count+1)}}>Add</button>
<button onClick={()=>{setCount(count-1)}}>Minus</button>
    </>
  )
}

export default Counter