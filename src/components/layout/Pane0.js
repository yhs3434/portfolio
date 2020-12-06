import React from 'react';
import './Pane0.css';

export default function Pane0 (props) {
    const { left, right } = props;
    return (
        <div className="pane0">
            <div className="pane0-left">
                {left}
            </div>
            <div className="pane0-right">
                {right}
            </div>
        </div>
    )
}