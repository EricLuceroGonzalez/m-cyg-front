import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";


class ActivateCamera extends Component {
    state = {  }
    handleCameraStart = stream => {
        console.log("handleCameraStart");
      };
      handleTakePhoto = (dataUri) => {
        window.location = dataUri
        // Do stuff with the photo...
        console.log('takePhoto');
        console.log(dataUri);
        
      }
    
    render() { 
        return ( 
            <Camera
            onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            idealResolution={{ width: 640, height: 480 }}
            imageType={IMAGE_TYPES.JPG}
            imageCompression={0.97}
            isMaxResolution={true}
            isImageMirror={false}
            isSilentMode={false}
            isDisplayStartCameraError={true}
            isFullscreen={false}
            sizeFactor={1}
            onCameraStart={stream => {
              this.handleCameraStart(stream);
            }}
          />
         );
    }
}
 

export default ActivateCamera;