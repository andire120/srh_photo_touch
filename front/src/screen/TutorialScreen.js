import React from "react";
import "./TutorialScreen.css";

const TutorialScreen = ({ onComplete }) => {
    return(
        <>
        <h1 className="head">HOW TO USE</h1>
    <div class="container">
        
    <div class="left">
        <img src={`${process.env.PUBLIC_URL}/example.png`} alt="example" />
    </div>
    <div class="no-center">
    <ul><li>Please choose a frame that you like before shooting.<br/><br/></li>
        <li>Four photos are taken every five seconds.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pose in time!<br/><br/></li>
        <li>Print or download the completed spam four-cut<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keep it.</li>
    </ul>
    </div>
    </div>
            <button className="next-button" onClick={ onComplete }>프레임 고르러 가기</button> 
        </> 
    )
}



export default TutorialScreen;