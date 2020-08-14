import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UseStateFetchAPI(){
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [id, setId] = useState(1)

  useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
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
  },[id])
  return(
    <>
      <h2><u>useState search Api</u></h2>
      <label>search title by id:</label>
      <input type="text" placeholder="search title by id" value={id} onChange={e=>setId(e.target.value)} />
      <li>{post.email}</li>
    </>
  )
}

export default UseStateFetchAPI