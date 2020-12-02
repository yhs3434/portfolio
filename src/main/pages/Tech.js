import React, { useState, useEffect } from 'react';
import './Tech.css';
import axios from 'axios';
import { ListStyle1 } from '../../components/index';

const serverURI = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

export default function Tech (props) {
    const [curCategory, setCurCategory] = useState("all");
    const [writings, setWritings] = useState(new Array());

    const tabClicked = (event) => {
        const curTab = event.target.dataset.category;
        setCurCategory(curTab);
    }

    useEffect(() => {
        emptyWritings();
        const result = axios.get(`http://${serverURI}/tech/category?q=${curCategory}`)
        .then((res) => {
            const {config, data, headers, request, status, statusText} = res;
            for (const row of data) {
                addMoreWritings(row);
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }, [curCategory])

    const emptyWritings = () => {
        setWritings(new Array());
    }

    function addMoreWritings(writing) {
        setWritings(prevItems => [...prevItems, writing]);
    }

    return (
        <div className="app-main-tech">
            <div className="app-main-tech-left">
                <nav className="app-main-tech-left-nav">
                    <ul className="app-main-tech-left-nav-ul">
                        <li><span className="app-main-tech-left-nav-ul-li button-rubber" data-category="all" onClick={tabClicked}>all</span></li>
                        <li><span className="app-main-tech-left-nav-ul-li button-rubber" data-category="pwa" onClick={tabClicked}>pwa</span></li>
                        <li><span className="app-main-tech-left-nav-ul-li button-rubber" data-category="javascript" onClick={tabClicked}>javascript</span></li>
                        <li><span className="app-main-tech-left-nav-ul-li button-rubber" data-category="html5" onClick={tabClicked}>html5</span></li>
                        <li><span className="app-main-tech-left-nav-ul-li button-rubber" data-category="css3" onClick={tabClicked}>css3</span></li>
                    </ul>
                </nav>
            </div>
            <div className="app-main-tech-right">
                {writings.map((item, idx) => (
                    <ListStyle1
                        key={idx}
                        table='tech'
                        id={item.id}
                        title={item.title}
                        created={item.created}
                        changed={item.changed}
                    />
                ))}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>
    )
}