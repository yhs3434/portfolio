import React from 'react';
import "./Diary.css";
import { TabCategory } from '../../components/index';

export default function Diary() {
    return(
        <div className="app-main-diary-total">
            <div className="app-main-diary-left">
                <TabCategory tabs={["all", "daily life", "think"]}/>
            </div>
            <div className="app-main-diary-right">
                right
            </div>
        </div>
    )
}