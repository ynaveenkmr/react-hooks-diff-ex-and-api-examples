import React, { useState } from 'react'

function HooksTwoWayDataBinding() {
    const [inputvalue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h1>TODO's</h1>
            <h4><u>Hooks Two way data binding</u></h4>
            <input type="text" value={inputvalue} onChange={handleInput}/>
            <div>{inputvalue}</div>
        </div>
    )
}

export default HooksTwoWayDataBinding