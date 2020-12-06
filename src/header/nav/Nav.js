import React from 'react';
import "./Nav.css";

import { Link } from 'react-router-dom';

export default function Nav(props) {
    const { setTab } = props;
    const tabClicked = (event) => {
        setTab(event.target.dataset.tab);
    }
    return(
        <ul className="app-header-nav-ul">
            <li className="app-header-nav-ul-li">
                <Link to="/about" className="button-rubber" onClick={tabClicked} data-tab="about">Portfolio</Link>
            </li>
            <li className="app-header-nav-ul-li">
                <Link to="/tech" className="button-rubber" onClick={tabClicked} data-tab="tech">Tech</Link>
            </li>
            <li className="app-header-nav-ul-li">
                <Link to="/diary" className="button-rubber" onClick={tabClicked} data-tab="diary">Diary</Link>
            </li>
            <li className="app-header-nav-ul-li">
                <Link to="/gallery" className="button-rubber" onClick={tabClicked} data-tab="gallery">Gallery</Link>
            </li>
        </ul>
    )
}