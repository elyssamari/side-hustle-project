import React from 'react';
import { Button } from 'react-bootstrap';
import "../../css/DirGrid.css";

const DirGrid = () => {
    return (
        <div class="directory">
            <div class="mariet" id="half">
                <div class="icon" id="dir-item">
                    <img id="pfp" src="mhymariet.png" alt="mariet-pfp" />
                </div>
                <div class="link" id="dir-item">
                    <p>Test paragraph</p>
                    <a href="/mariet"><Button id="mbtn">Click Here!</Button></a>
                </div>
            </div>
            <div class="hano" id="half">
                <div class="link" id="dir-item">
                    <p>Test paragraph</p>
                    <a href="/hano"><Button id="hbtn">Click Here!</Button></a>
                </div>
                <div class="icon" id="dir-item">
                    <img id="pfp" src="mhyhano.png" alt="hano-pfp" />
                </div>
            </div>
            <div class="yaron" id="half">
                <div class="icon" id="dir-item">
                    <img id="pfp" src="mhybola.png" alt="yaron-pfp" />
                </div>
                <div class="link" id="dir-item">
                    <p>Test paragraph</p>
                    <a href="/yaron"><Button id="bbtn">Click Here!</Button></a>
                </div>
            </div>
        </div>
    )
}

export default DirGrid;