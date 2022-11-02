import React, { useState } from "react";
import './EightBall.css'

const EightBall = ({ answers }) => {
    /* Randomizes an answer */
    const cycleAnswer = () => {
        setAns(answers[Math.floor(Math.random() * answers.length)]);
    }

    const [ans, setAns] = useState({ msg: "Think of a Question", color: "black" });

    return (
        <div
            className="eightball"
            onClick={ cycleAnswer }
            style={{ backgroundColor: ans.color }}>
            <h2>{ans.msg}</h2>
        </div>
    );
};

export default EightBall;