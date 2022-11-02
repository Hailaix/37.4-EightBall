import React, { useState } from "react";
import './EightBall.css'

const EightBall = ({ answers }) => {
    /* Randomizes an answer */
    const cycleAnswer = () => {
        const newAnswer = answers[Math.floor(Math.random() * answers.length)]
        if(newAnswer.color === 'red') setR(r + 1);
        if(newAnswer.color === 'goldenrod') setY(y + 1);
        if(newAnswer.color === 'green') setG(g + 1);
        setAns(newAnswer);
        
    }

    const reset = () => { 
        setAns({ msg: "Think of a Question", color: "black" });
        setR(0);
        setG(0);
        setY(0); 
    }

    const [ans, setAns] = useState({ msg: "Think of a Question", color: "black" });
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [y, setY] = useState(0);

    return (
        <>
        <span>Red Count: {r} </span>
        <span>Yellow Count: {y} </span>
        <span>Green Count: {g} </span>
            <div
                className="eightball"
                onClick={cycleAnswer}
                style={{ backgroundColor: ans.color }}>
                <h2>{ans.msg}</h2>
            </div>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default EightBall;