import React,{useState} from 'react'

function ArrayAddingDynamicValue(){
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items,{
      id:items.length,
      value:Math.floor(Math.random()*10)+1}])
  }
  return(
    <>
    <hr/>
    <button onClick={addItem}>Add item</button>
    <ul>
{items.map(item=>(
  <li key={item.id}>{item.value}</li>
))}
</ul>
    </>
  )
}

export default ArrayAddingDynamicValue