import React from 'react';
import logo from './logo.svg';
import './App.css';


const Comp = (props) => (

  <div >


    <div className="App" onLoad = {props.main}>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" /> 
        <h4 className="App-title">YOLO tiny with Tensorflow.js and REACT</h4>
      </header>     
    </div> <br/>

    <div id="loading-message">
       <p>YOLO model is loading. This will take a few moments ...</p>
       <p>All goods things come for those who wait</p>
    </div><br/>    

    <div className="spinner" id="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
    <div id="webcam-wrapper" >
        <video id="video"  width="416" height="416" controls autoPlay ></video>
    </div><br/>


</div>
);

export default Comp;
