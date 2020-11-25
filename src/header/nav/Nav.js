import React from 'react';
import "./Nav.css";

import { Link } from 'react-router-dom';

export default function Nav(props) {
    return(
        <ul className="app-header-nav-ul">
            <li className="app-header-nav-ul-li"><Link to="/about" className="button-rubber">Portfolio</Link></li>
            <li className="app-header-nav-ul-li"><Link to="/diary" className="button-rubber">Diary</Link></li>
        </ul>
    )
}