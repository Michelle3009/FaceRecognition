import React, { Component } from 'react';
import { DetectFaceExtract } from './azure.js'
import { Button } from 'reactstrap';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
export class Home extends Component {
    static displayName = Home.name;
    
    render() {
        console.log("HIIIIIIIIIIII")
        return (
            <div>
                <WebcamComponent/>
                <Button onClick={() => DetectFaceExtract()} />

            </div >
        );
    }
  }

