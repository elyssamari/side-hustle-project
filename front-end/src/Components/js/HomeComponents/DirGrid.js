import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../../css/DirGrid.css";

const DirGrid = (props) => {

    return (
        <div class="directory">
            <div ref={props.mariet} class="mariet" id="half">
                <div class="icon" id="dir-item">
                    <img id="pfp" src={process.env.PUBLIC_URL + "/mhymariet.png"} alt="mariet-pfp" />
                </div>
                <div class="link" id="dir-item">
                <Navbar className="justify-content-md-center" id="marietHeader-line"></Navbar>
                    <h1 class="dirGrid-header">mariet</h1>
                    <p>Hi, I’m Mariet or Mari for short!</p>
                    <p> ☽(*◕ヮ◕*)☆</p>
                    <p>I like to sing, play games, and doodle! 
                        Some of my goals is to hopefully get better at music and art in the future.
                    </p>
                    <p>Please check out my website below!</p>
                    <a href="/mariet"><Button id="link-btn">Click Here!</Button></a>
                </div>
            </div>
            <div ref={props.hano} class="hano" id="half">
                <div class="link" id="dir-item">
                <Navbar className="justify-content-md-center" id="hanoHeader-line"></Navbar>
                    <h1 class="dirGrid-header">hano</h1>
                    <p>Hi, I’m Hano!</p>
                    <p>I like cute things and doodling bunnies :)</p>
                    <a href="/hano"><Button id="link-btn">Click Here!</Button></a>
                </div>
                <div class="icon" id="dir-item">
                    <img id="pfp" src={process.env.PUBLIC_URL + "/mhyhano.png"} alt="hano-pfp" />
                </div>
            </div>
            <div ref={props.yaron} class="yaron" id="half">
                <div class="icon" id="dir-item">
                    <img id="pfp" src={process.env.PUBLIC_URL + "/mhybola.png"} alt="yaron-pfp" />
                </div>
                <div class="link" id="dir-item">
                <Navbar className="justify-content-md-center" id="yaronHeader-line"></Navbar>
                    <h1 class="dirGrid-header">yaron</h1>
                    <p>Hi, I’m Yaron!</p>
                    <p>I like to tippity tap tap with games and coding. ٩(◕‿◕｡)۶ 
                        at this rate im gonna develop carpal tunnel</p>
                    <p>also gacha addict (its not gambling i swear)</p>
                    <a href="/yaron"><Button id="link-btn">Click Here!</Button></a>
                </div>
            </div>
        </div>
    )
}

export default DirGrid;