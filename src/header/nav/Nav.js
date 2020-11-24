import React from 'react';
import "./Nav.css";

import { Link } from 'react-router-dom';

export default function Nav(props) {
    return(
        <ul className="app-header-nav-ul">
            <li className="app-header-nav-ul-li button-rubber"><Link to="/about">이력</Link></li>
            <li className="app-header-nav-ul-li button-rubber"><Link to="/diary">일기장</Link></li>
        </ul>
    )
}