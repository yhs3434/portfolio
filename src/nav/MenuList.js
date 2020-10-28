import React from 'react';
import "./MenuList.css";

import { Link } from 'react-router-dom';

export default function MenuList(props) {
    return(
        <ul className="ul_main_1">
            <li className="li_main_1"><Link to="/">홈</Link></li>
            <li className="li_main_1"><Link to="/about">이력</Link></li>
            <li className="li_main_1"><Link to="/diary">일기장</Link></li>
            <li className="li_main_1"><Link to="/customercenter">문의</Link></li>
        </ul>
    )
}