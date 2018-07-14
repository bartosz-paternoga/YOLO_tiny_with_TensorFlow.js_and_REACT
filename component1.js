import React from 'react';
import logo from './logo.svg';
import './App.css';


const Comp = (props) => (

  <div  >

    <div className="App" >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" /> 
        <h4 className="App-title">YOLO tiny with Tensorflow.js and REACT</h4>
      </header>     
    </div> <br/>

    <div id="webcam-wrapper" >
        <video id="video"  width="416" height="416" controls autoPlay ></video>
    </div><br/>



   <div className="App">
    <button className="btn btn-primary btn-xl" onClick={props.startWebcam}>Start WebCam</button>
    <button className="btn btn-primary btn-xl" onClick={props.stopWebcam}>Stop WebCam</button>
 

  </div>

</div>
);

export default Comp;
