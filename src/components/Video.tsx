import React, { useCallback, useContext, useEffect, useRef } from 'react';
import Webcam from "react-webcam";
import { AppContext } from '../context/context';
import Thief from '../assets/Thief.gif';

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user"
};

function Video() {
  const [state, dispatch] = useContext(AppContext)
  const webcamRef = useRef({} as any);
  const width = 320;
  // const height = width * 0.5625;
  const height = 240;

  useEffect(() => {

    setInterval(() => {
      if (webcamRef && webcamRef.current) {
        const imageSrc = webcamRef?.current?.getScreenshot();
        state.socket.emit("send_image", imageSrc)
      }
    }, 200)
  }, [])

  return (
    <div className="col-12 flex center">
      <h4 className="top-text">Anyone home?</h4>
      {state.isHome &&
        <h4 className="status-text" style={{color: 'lightgreen'}}>Yes!</h4>
      }
      {!state.isHome &&
        <h4 className="status-text" style={{color: 'coral'}}>No!</h4>
      }
      <div className="house">
        <Webcam
          audio={false}
          height={height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={width}
          videoConstraints={videoConstraints}
          className="webcam-left"
        />
        {state.image.length > 0 && (
            <img src={state.image} alt="" className="webcam-right"></img>
        )}
      </div>
      {/* <button className="btn btn-primary my-2" onClick={capture}>Capture photo</button> */}
      {/* <img src={Thief} alt="thief" style={{"position": "absolute", left: `${state.thiefProgress/2}%`, transform: state.isHome ? '' : 'scaleX(-1)' }}></img> */}
      <img src={Thief} alt="thief" style={{"position": "absolute", left: `${state.thiefProgress/2}%`, top:0, transform: state.isHome ? '' : 'scaleX(-1)' }}></img>
    </div >
  );
};

export default Video;
