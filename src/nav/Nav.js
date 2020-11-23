import React from 'react';
import "./Nav.css";

import { Link } from 'react-router-dom';

export default function Nav(props) {
    return(
        <ul className="nav ul">
            <li className="nav li"><Link to="/">홈</Link></li>
            <li className="nav li"><Link to="/about">이력</Link></li>
            <li className="nav li"><Link to="/diary">일기장</Link></li>
            <li className="nav li"><Link to="/customercenter">문의</Link></li>
        </ul>
    )
}