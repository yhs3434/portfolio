import React from 'react';
import "./MenuList.css";

import { useHistory } from 'react-router-dom';

export default function MenuList(props) {
    let history = useHistory();

    function menuItemClick(e) {
        const curItem = e.target.dataset.value;
        history.push(curItem);
    }

    return(
        <ul id="menulist">
            <li data-value="home" onClick={menuItemClick}>홈</li>
            <li data-value="board" onClick={menuItemClick}>게시판</li>
            <li data-value="customercenter" onClick={menuItemClick}>문의</li>
        </ul>
    )
}