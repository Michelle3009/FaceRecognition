import React, { Component } from 'react';
//import { DetectFaceExtract } from './azure.js'
import { Button } from 'reactstrap';
import { iframe } from "react-webcam";
import Webcam from 'webcam-easy';
/*import { uploadImage } from '../../firebase/images.service'
import { imageEndpoint } from '../../Endpoint/images'*/
import camControl from 'ip-cam-control'
import { Layout } from '../Layout';
export default class Camera extends Component {
    static displayName = Camera.name;
    constructor(props) {

        super(props)
        this.webcamRef = React.createRef(null);
        this.state = { image: '' }
    }

    getFileExtension(filename) {
        return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    }
    /*test() {
        let cam = new Webcam()
        cam.snap(function (data_uri) {
        // display results in page
          
        document.getElementById('"main"').innerHTML =
            '<img src="' + data_uri + '"/>';
        });
    }*/
    counter() {

        /*setInterval(() => {
            const imageSrc = this.webcamRef.current.getScreenshot();
            
        }, 1000);*//*
        const imageSrc = this.webcamRef.current.getScreenshot();
        const result = uploadImage(imageSrc, this.getFileExtension(imageSrc))
        result.then((res) => imageEndpoint(res))*/

        var camSettings = {
            led: true,
            motionDetection: true,
            allowMobileStreaming: true
        }

        /*camControl.editCamSettings('http://192.168.100.4:8080/video', '80', 'Admin', '12345', camSettings, function (err) {
            if (err) throw err;
        });*/

    }

    render() {


        return (
            <>
                <Layout>
                    <div style={{ width: '100%', height: '90%', display: 'flex', alignItems: 'center', marginTop:"20px" }}>
                <img style={{ margin: 'auto', background: 'hsl(0, 0%, 25%)', WebkitUserSelect: 'none', height: "80%", width: "50%" }} src={"http://192.168.1.3:8080/video"} />
                {/*<input type="submit" value="Probar" />*/}
                    </div>
                </Layout>
                </>
        );
    }
}