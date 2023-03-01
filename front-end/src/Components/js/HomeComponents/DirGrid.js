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
                    <h1>mariet</h1>
                    <p>Hi, I’m Mariet or Mari for short!</p>
                    <p>☽(*◕ヮ◕*)☆</p>
                    <p>I like to sing, play games, and doodle! 
                        Some of my goals is to hopefully get better at music and art in the future.
                    ♪(´▽｀)✧</p>
                    <p>Please check out my website below!</p>
                    <a href="/mariet"><Button id="link-btn">Click Here!</Button></a>
                </div>
            </div>
            <div class="hano" id="half">
                <div class="link" id="dir-item">
                    <h1>hano</h1>
                    <p>Hi, I’m Hano!</p>
                    <p>I like cute things and doodling bunnies :)</p>
                    <a href="/hano"><Button id="link-btn">Click Here!</Button></a>
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
                    <h1>yaron</h1>
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