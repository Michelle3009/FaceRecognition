import React, { Component } from 'react';
//import { DetectFaceExtract } from './azure.js'
import { Button} from 'reactstrap';
import Webcam from "react-webcam";
import { uploadImage } from '../firebase/images.service'

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {

        super(props)
        this.webcamRef = React.createRef(null);
        this.state = {image : ''}
    }
     
     getFileExtension(filename) {
        return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    }
      counter() {
        /*setInterval(() => {
            const imageSrc = this.webcamRef.current.getScreenshot();
            
        }, 1000);*/
          console.log("ME CAGO EN STEFANNNNNNNNY")
          const imageSrc = this.webcamRef.current.getScreenshot();
          console.log(imageSrc)
          uploadImage(imageSrc, this.getFileExtension(imageSrc))
    }
   
    render() {
        

        return (
            <div>
                <Webcam  audio={false}
                    height={720}
                    ref={this.webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280} />
                <Button onClick={() => this.counter()} />

            </div >
        );
    }
  }

