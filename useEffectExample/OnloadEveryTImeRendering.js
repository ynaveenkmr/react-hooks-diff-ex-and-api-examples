import React,{useState, useEffect} from 'react'

function OnloadEveryTImeRendering(){
const [count, setCount] = useState(0)
const [name, setName] = useState("")

useEffect(()=>{
  console.log("updating title using useEffect if i don't give [count] has second parameter it will render every time to avoid it we have given [count] has second parameter")
  document.title=`You clicked ${count} times`
},[count])

  return(
    <>
    <hr />
    <h4><u>useEffect Example Render every time</u></h4>
    <input type="text" value={name} onChange={e=>setName(e.target.value)} />
    <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </>
  )
}

export default OnloadEveryTImeRendering
