import React,{useState, useEffect} from 'react'
import axios from 'axios'

function FetchApiBySearchingIdUsingButton(){
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [id, setId] = useState(1)
  const [formButtonClick, setFormButtonClick] = useState(1)

  const handleClick = () => {
    setFormButtonClick(id)
  }

  useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/users/${formButtonClick}`)
.then((res)=>{
  setLoading(false)
  setPost(res.data)
  setError('')
})
.catch((error)=>{
  setLoading(false)
  setPost({})
  setError('Sorry unable to fetch')
})
  },[formButtonClick])
  return(
    <>
      <h2><u>useState search Api by button click</u></h2>
      <input type="text" placeholder="search title by id" value={id} onChange={e=>setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Api by ID</button>
      <li>{post.email}</li>
    </>
  )
}

export default FetchApiBySearchingIdUsingButton