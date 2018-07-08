import React from 'react';
import logo from './logo.svg';
import './App.css';


const Comp = (props) => (

  <div className="All" >

    <div className="App" >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" /> 
        <h4 className="App-title">YOLO tiny with Tensorflow.js and REACT</h4>
      </header>     
    </div> <br/>

    
    <div className="App">

    <video  width="416" height="416" id="video" controls autoPlay ></video>
    </div>


   <div className="App">
    <button onClick={props.startWebcam}>Start WebCam</button>
    <button onClick={props.stopWebcam}>Stop WebCam</button>
 
     <p className="Space" >Predicted output : {props.nameyolo} </p>
     <p className="Space" >Probability: {props.probability} </p>
  </div>

</div>
);

export default Comp;
