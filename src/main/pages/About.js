import React, { useState, useEffect } from 'react';
import "./About.css";
import githubIcon from '../../assets/images/github.png';
import instagramIcon from '../../assets/images/instagram.png';

export default function About() {
    const [curTab, setCurTab] = useState(-1);
    const [isOffsets, setIsOffsets] = useState(false);
    const [myOffsets, setMyOffsets] = useState([]);

    function mainTabClicked(event) {
        const curTabIdx = event.target.dataset.idx;
        setCurTab(curTabIdx);
    }

    function openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    function githubIconClicked(event) {
        openInNewTab("https://github.com/yhs3434");
    }

    function instagramIconClicked(event) {
        openInNewTab("https://www.instagram.com/hanso_l_/");
    }

    function addMoreOffset(idx, offset) {
        setMyOffsets(prevItems => [...prevItems, {
            idx, offset
        }])
    }

    function getOffSetTop() {
        const elem = document.getElementById('about-tab-container');
        for (let i=0; i<elem.children.length; i++) {
            addMoreOffset(i, elem.children[i].offsetTop);
        }
        setIsOffsets(true);
    }

    function scrollEvent(event) {
        const curScroll = window.scrollY + 5;
        const boxElem = document.getElementById('about-tab-box');
        let curTabIdx = curTab;
        if (curScroll < myOffsets[0].offset) {
            curTabIdx = -1;
            setCurTab(curTabIdx);
            if (boxElem.className.includes('about-tab-appear')) {
                boxElem.className = boxElem.className.replace('about-tab-appear', 'about-tab-disappear');
            }
        } else if (curScroll >= myOffsets[0].offset && curScroll < myOffsets[1].offset) {
            curTabIdx = 0;
            setCurTab(curTabIdx);
            if (boxElem.className.includes('about-tab-init')) {
                boxElem.className = boxElem.className.replace('about-tab-init', 'about-tab-appear');
            } else if (boxElem.className.includes('about-tab-disappear')) {
                boxElem.className = boxElem.className.replace('about-tab-disappear', 'about-tab-appear');
            }
        } else if (curScroll >= myOffsets[1].offset && curScroll < myOffsets[2].offset) {
            curTabIdx = 1;
            setCurTab(curTabIdx);
        } else if (curScroll >= myOffsets[2].offset && curScroll < myOffsets[3].offset) {
            curTabIdx = 2;
            setCurTab(curTabIdx);
        } else if (curScroll >= myOffsets[3].offset && curScroll < myOffsets[4].offset) {
            curTabIdx = 3;
            setCurTab(curTabIdx);
        } else if (curScroll >= myOffsets[4].offset && curScroll < myOffsets[5].offset) {
            curTabIdx = 4;
            setCurTab(curTabIdx);
        } else if (curScroll >= myOffsets[5].offset) {
            curTabIdx = 5;
            setCurTab(curTabIdx);
        }
    }

    useEffect(() => {
        getOffSetTop();
    }, []);

    useEffect(() => {
        if (isOffsets === true) {
            window.addEventListener('scroll', scrollEvent);
            return () => {
                window.removeEventListener('scroll', scrollEvent);
        }
        }
    }, [isOffsets])

    useEffect(() => {
        const parent = document.getElementById('app-main-about-left-nav-ul-0');
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[1].className = parent.children[i].children[1].className.replace(' tab-active', '')
        }
        if (curTab < 0) return;
        parent.children[curTab].children[1].className += ' tab-active'
    }, [curTab])

    return(
        <div className="app-main-about">
            <div className="app-main-about-left">
                <nav className="app-main-about-left-nav">
                    <ul
                        id="app-main-about-left-nav-ul-0"
                        className="app-main-about-left-nav-ul"
                    >
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={0}
                            >
                                About
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li className="app-main-about-left-nav-ul-li-ul-li"><a href="#about-tab-00">intro</a></li>
                                <li><a href="#about-tab-00-00">Name</a></li>
                                <li><a href="#about-tab-00-01">Description</a></li>
                                <li><a href="#about-tab-00-02">href</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={1}
                            >
                                Education
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-01">intro</a></li>
                                <li><a href="#about-tab-01-00">University</a></li>
                                <li><a href="#about-tab-01-01">High school</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={2}
                            >
                                Skills
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-02">intro</a></li>
                                <li><a href="#about-tab-02-00">major</a></li>
                                <li><a href="#about-tab-02-01">minor</a></li>
                                <li><a href="#about-tab-02-02">etc</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={3}
                            >
                                Projects
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-03">intro</a></li>
                                <li><a href="#about-tab-03-00">school</a></li>
                                <li><a href="#about-tab-03-01">society</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={4}
                            >
                                Interests
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-04">intro</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={5}
                            >
                                Workflow
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-05">intro</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="space-vertical" />
                    <div id="about-tab-box" className="app-main-about-left-nav-div about-tab-init">
                        <span>Yoon Han Sol</span>
                    </div>
                </nav>
            </div>

            <div className="app-main-about-right" id="about-tab-container">
                <div
                    id="about-tab-00"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        About
                    </h2>
                    <div id="about-tab-00-00">
                        <span style={{fontSize: '30px'}}>HANSOL</span>
                        <span> </span>
                        <span style={{fontSize: '20px'}}>YOON</span>
                    </div>
                    <div className="space-vertical" />
                    <div
                        style={{display: 'flex', flexDirection: 'column', fontSize: "14px"}}
                        id="about-tab-00-01"
                    >
                        <span>주소 : 경기도 용인시 처인구 금령로173번길 5</span>
                        <span>번호 : +82-10-9099-8225</span>
                        <span>Email : yhs3434@gmail.com</span>
                    </div>
                    <div className="space-vertical" />
                    <div
                        style={{display: 'flex', alignItems: 'center'}}
                        id="about-tab-00-02"
                    >
                        <img
                            src={githubIcon}
                            width='30px'
                            className="app-main-about-right-div-p-img github-icon"
                            onClick={githubIconClicked}
                        />
                        <img
                            src={instagramIcon}
                            width='40px'
                            className="app-main-about-right-div-p-img instagram-icon"
                            onClick={instagramIconClicked}
                        />
                    </div>
                </div>

                <div
                    id="about-tab-01"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Education
                    </h2>
                    <div
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                        id="about-tab-01-00"    
                    >
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3>University Of Dankook</h3>
                            <span>Bachelor Of Computer Science</span>
                            <span>Software Engineering</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>2013.03 ~ 2020.08</span>
                        </div>
                    </div>
                    <div className="space-vertical" style={{height: '40px'}}/>
                    <div
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                        id="about-tab-01-01"    
                    >
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3>Taesung High School</h3>
                            <span>Math / Science</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>2009.03 ~ 2012.02</span>
                        </div>
                    </div>
                </div>

                <div
                    id="about-tab-02"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Skills
                    </h2>
                    <div id="about-tab-02-00">
                        <h3>Major</h3>
                        <div>
                            <h4>front end</h4>
                            PWA, HTML5, CSS3, JAVASCRIPT (es6 이전, 이후 모두 가능), React, Vue
                        </div>
                        <div>
                            <h4>back end</h4>
                            Websocket (ws protocol)
                        </div>
                    </div>
                    <div className="space-vertical" style={{height: '100px'}}/>
                    <div id="about-tab-02-01">
                        <h3>Minor</h3>
                        <div>
                            <h4>front end</h4>
                            Android (Java), jQuery
                        </div>
                        <div>
                            <h4>back end</h4>
                            Django, Flask, Express, Koa, PHP
                        </div>
                    </div>
                    <div className="space-vertical" style={{height: '100px'}}/>
                    <div id="about-tab-02-02">
                        <h3>etc</h3>
                        <div>
                            <h4>Database</h4>
                            MySQL, mongo db, indexedDB
                        </div>
                        <div>
                            <h4>Language</h4>
                            C, C++, JAVA, python, javascript, R
                        </div>
                        <div>
                            <h4>Source code management</h4>
                            git
                        </div>
                    </div>
                </div>

                <div
                    id="about-tab-03"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Projects
                    </h2>
                    <div id="about-tab-03-00">
                        <h3>School</h3>
                        <div>
                            <h4>Suroom</h4>
                            member: Yoon han sol(Leader), Park hong je, Lee dong gon
                        </div>
                        <div>
                            <h4>Smart Career</h4>
                            member: Yoon han sol(Leader), Lee yoo chan, Jung jin man, Han sang il
                        </div>
                        <div>
                            <h4>Medical system for using blockchain</h4>
                            member : Han su young(Leader), Kim je hyoung, Park si hwan, Yoon han sol
                        </div>
                    </div>
                    <div className="space-vertical" />
                    <div id="about-tab-03-01">
                        <h3>Society</h3>
                        <div>
                            not yet...
                        </div>
                    </div>
                </div>

                <div
                    id="about-tab-04"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Interests
                    </h2>
                    <div>
                        <h3>game</h3>
                        <div>
                            League of legends (Dia IV)
                            Overwatch (Dia)
                        </div>
                    </div>
                </div>

                <div
                    id="about-tab-05"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Workflow
                    </h2>
                    section 05
                </div>
            </div>
        </div>
    )
}