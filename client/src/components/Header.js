import React, { useContext,useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext';

function Header() {
  const {setUserInfo,userInfo}= useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    }).then(response =>{
      response.json().then(userInfo =>{
        setUserInfo(userInfo);
      })
    })
  }, [])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }
  const username=userInfo?.username;
  return (
    <div>
      <header>
    <Link to="/" className="logo">My Blog</Link> 
    <div>
      {username && (
        <>
        <Link to="/">Home</Link>
        <Link to="/about" >About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/create">Create new post</Link> 
        <Link onClick={logout}>LogOut</Link>
        
         </>
      )}
      {!username && (
        <>
        <Link to="/">Home</Link>
        <Link to="/about" >About Us</Link>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/register">Register</Link> 
        <Link to="/login">Login</Link>
      
        </>
      )}
      
    </div>
  </header>
  </div>
  )
}

export default Header