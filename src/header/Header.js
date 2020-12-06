import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Nav } from './nav/index';
import searchIcon from '../assets/images/search.svg';

export default function Header(props) {
    const {setTab} = props;

    return(
        <div className="app-header-total">
            <div className="app-header-up">
                <div className="app-header-up-behind" />
                <div className="app-header-up-left">
                    <Link to="/" className="button-rubber">
                        <span className="app-header-up-left-first">HANSOL</span>
                        <span className="app-header-up-left-last">YOON</span>
                    </Link>
                </div>
                <div className="app-header-up-behind" />
                <div className="app-header-up-mid">
                    <div className="app-header-up-mid-search">
                        <input
                            type="text"
                            placeholder="search"
                            className="app-header-up-mid-search-input"
                        />
                        <img
                            src={searchIcon}
                            className="app-header-up-mid-search-icon"
                        />
                    </div>
                </div>
                <div className="app-header-up-right">

                </div>
                
                
            </div>
            <div className="app-header-down">
                <Nav setTab={setTab} />
            </div>
        </div>
    )
}