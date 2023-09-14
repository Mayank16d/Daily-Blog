import React, { useEffect, useState } from 'react'
import Post from './Post'

function Indexpage() {
    const [posts, setPost]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/post').then(response =>{
            response.json().then(posts =>{
                setPost(posts);
            });
        });
    }, []);
  return (
    <>
    { posts.length>0 && posts.map(post=>(
        <Post {...post} />
    ))}
    </>
  )
}

export default Indexpage