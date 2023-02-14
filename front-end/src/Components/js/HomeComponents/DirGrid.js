import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/DirGrid.css";

const DirGrid = () => {
    return (
        <div class="directory">
            <div class="mariet" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <Link to="/mariet">Click Here!</Link>
                </div>
            </div>
            <div class="hano" id="half">
                <div class="link" id="item">
                    <Link to="/hano">Click Here!</Link>
                </div>
                <div class="icon" id="item">two</div>
            </div>
            <div class="yaron" id="half">
                <div class="icon" id="item">one</div>
                <div class="link" id="item">
                    <Link to="/yaron">Click Here!</Link>
                </div>
            </div>
        </div>
    )
}

export default DirGrid;