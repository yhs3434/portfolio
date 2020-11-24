import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Nav } from './nav/index';

export default function Header() {
    return(
        <div className="app-header-wrap">
            <div className="app-header-up">
                <Link to="/" className="button-rubber">Who is Yoon Han Sol</Link>
                <div className="app-header-search">
                    <input
                        type="text"
                        placeholder="검색"
                    />
                </div>
                <button className="button-rubber">버튼</button>
            </div>
            <div className="app-header-down">
                <Nav />
            </div>
        </div>
    )
}