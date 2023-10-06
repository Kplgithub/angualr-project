import React, { useEffect, useState } from 'react'

const Science = () => {
  const[posts,setPosts]=useState([])
  useEffect(()=>{
  const url="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=34737f8e0a3240d19e8f8c94844b5351"
  fetch(url).then(resp=>resp.json())
  .then(resp=>setPosts(resp.articles))
  },[])
  return (
    <>
       <div className="mainBox3">
{ 
  posts.map(post=>
    <div className="card"key={post.publishedAt}><br />
    <img className="card-img-top" src={post.urlToImage}alt="News"/>
    <div className="card-body">
      <p className="card-title">{post.title}</p>
      <p className="card-text">{post.description}</p><br/>
      <p className="card-text">SOURCE - {post.source.name}</p>
      <button type="button" className="newsButton"><a href={post.url}>Read More</a></button>
    </div>
  </div>
  )
  }
  </div> 
    </>
  )
}

export default Science