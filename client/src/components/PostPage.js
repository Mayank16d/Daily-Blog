import { formatISO9075 } from 'date-fns';
import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';


function PostPage() {
  const {userInfo}=useContext(UserContext);
    const [postInfo,setPostInfo]= useState(null);
    const {id} =useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(response =>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
            });
        });
    },[]);
    if(!postInfo) return '';

  return (
    <div className='postp'>
      <div className='ppimage'>
        <img  src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      {userInfo.id === postInfo.author._id &&(
        <div className='edit-row'>
          <Link className='edit-btn' to={`/edit/${postInfo._id}`}>Edit-this-post</Link>
        </div>
      )}
      <div className='pptext'>
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className="author">by {postInfo.author.username}</div>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}  />
      </div>
      
    </div>
  )
}

export default PostPage