import React from 'react';
import { Button } from 'react-bootstrap';
import "../../css/DirGrid.css";

const DirGrid = () => {
    return (
        <div class="directory">
            <div class="mariet" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <p>Test paragraph</p>
                    <a href="/mariet"><Button>Click Here!</Button></a>
                </div>
            </div>
            <div class="hano" id="half">
                <div class="link" id="item">
                    <p>Test paragraph</p>
                    <a href="/hano"><Button>Click Here!</Button></a>
                </div>
                <div class="icon" id="item">two</div>
            </div>
            <div class="yaron" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <p>Test paragraph</p>
                    <a href="/yaron"><Button>Click Here!</Button></a>
                </div>
            </div>
        </div>
    )
}

export default DirGrid;