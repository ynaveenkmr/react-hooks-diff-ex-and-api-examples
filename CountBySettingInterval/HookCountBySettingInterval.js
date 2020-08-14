import React, {useState, useEffect} from 'react'

function HookCountBySettingInterval() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	}, [count])
  return (
    <div>
<h4><u>Using Hooks count by setting interval</u></h4>
      <h4>{count}</h4>
    </div>
  )
}

export default HookCountBySettingInterval