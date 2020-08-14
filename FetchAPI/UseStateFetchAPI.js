import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UseStateFetchAPI(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/users`)
.then((res)=>{
  setLoading(false)
  setPosts(res.data)
  setError('')
})
.catch((error)=>{
  setLoading(false)
  setPosts({})
  setError('Sorry unable to fetch')
})
  },[])
  return(
    <>
    <hr />
      <h2><u>useState Fetching Api</u></h2>
     
       {/*
        <ul>
        {posts.map(post =>(<li key={post.id}>{post.email}</li>) )}
        </ul>
        */}
      


       
      {loading?"loading...":posts.map(post =>(<li key={post.id}>{post.email}</li>) )}
      {error?erro:null}

       
    </>
  )
}

export default UseStateFetchAPI