// animation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animation.json';
import './App.css';

const Loading = () => {

  return (
    <div className='lottie'>
     
       <Lottie animationData={animationData} style = {{width:'20vw'}} />

    </div>
   
  )
  
 
};

export default Loading;  // Keep only this line
