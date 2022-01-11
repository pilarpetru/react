import React from 'react';

export default function Tempo(props) {
    let minute = props.min;
    let second = props.sec;

    return (
        <div className="Tempo">
            <h1>{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</h1>
        </div>
    )
}