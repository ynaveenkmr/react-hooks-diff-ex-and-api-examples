import React,{useState, useEffect} from 'react'
import UsingHookMouseXYPosition from '../RunningEffectOnlyOnce/UsingHookMouseXYPosition'

function MouseContainer(){
  const [display, setDisplay] = useState(true)
  return(
    <>
    <hr />
    <h4><u>Note:</u> By returning removeEventListner code in 'UsingHookMouseXYPosition' component after toggling the on moving mouse it is not showing the render one i.e., for more clarification remove the removeEventListner from the both components and see you will see in the console log of that compoent even after toggle</h4>
    <button onClick={() => setDisplay(!display)}>Toggle display</button>
    {display && <UsingHookMouseXYPosition></UsingHookMouseXYPosition>}
    </>
  )
}

export default MouseContainer