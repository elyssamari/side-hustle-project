import React from 'react';
import "../../css/DirGrid.css";

const DirGrid = () => {
    return (
        <div class="directory">
            <div class="mariet" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <a href="/mariet">Click Here!</a>
                </div>
            </div>
            <div class="hano" id="half">
                <div class="link" id="item">
                    <a href="/hano">Click Here!</a>
                </div>
                <div class="icon" id="item">two</div>
            </div>
            <div class="yaron" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <a href="/yaron">Click Here!</a>
                </div>
            </div>
        </div>
    )
}

export default DirGrid;