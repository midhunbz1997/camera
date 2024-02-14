// import React, { useState, useRef } from "react";
// import {Camera} from "react-camera-pro";

// const Component = () => {
//   const camera = useRef(null);
//   const [image, setImage] = useState(null);

//   return (
//     <div>
//       <Camera ref={camera} aspectRatio={'cover'} facingMode={'environment'} />
//       <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
//       <img src={image} alt='Taken photo'/>
//     </div>
//   );
// }

// export default Component;
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Camera } from "react-camera-pro";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CameraWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CaptureButton = styled.button`
  position: absolute;
  bottom: 20px;
  z-index: 1;
`;

const SwitchCameraButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

const Component = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  return (
    <Container>
      <CameraWrapper>
        <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} aspectRatio={16 / 9} />
      </CameraWrapper>
      <img src={image} alt="Image preview" />
      <CaptureButton
        onClick={() => {
          const photo = camera.current.takePhoto();
          setImage(photo);
        }}
      >
        Capture
      </CaptureButton>
      <SwitchCameraButton
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      >
        Switch Camera
      </SwitchCameraButton>
    </Container>
  );
};

export default Component;

