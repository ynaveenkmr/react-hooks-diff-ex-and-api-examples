import React, { useState, useEffect } from 'react'

function UsingHookMouseXYPosition() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
    //console.log('mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect calling only at once due to by keeping Aray has second parameter in   useEffect')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])
	return (
		<div>
    <h4><u>Using Hooks</u></h4>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default UsingHookMouseXYPosition