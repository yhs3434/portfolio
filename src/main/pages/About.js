import React, { useState, useEffect } from 'react';
import "./About.css";
import githubIcon from '../../assets/images/github.png';
import instagramIcon from '../../assets/images/instagram.png';
import searchIcon from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';

export default function About() {
    const [curTab, setCurTab] = useState(-1);
    const [isOffsets, setIsOffsets] = useState(false);
    const [myOffsets, setMyOffsets] = useState([]);

    function mainTabClicked(event) {
        const curTabIdx = event.target.dataset.idx;
        if (curTab === curTabIdx) {
            setCurTab(-1);
        } else {
            setCurTab(curTabIdx);
        }
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

    function appearDisappear(elem, class1, class2) {
        if  (elem.className.includes(class1)) {
            elem.className = elem.className.replace(class1, class2);
            return true;
        }
        return false;
    }

    function scrollEvent(event) {
        const curScroll = window.scrollY + 5;
        const boxElem = document.getElementById('about-tab-box');
        const aboutHideElem = document.getElementById('about-hide-00');
        let curTabIdx = curTab;
        if (curScroll < myOffsets[0].offset) {
            curTabIdx = -1;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-appear', 'about-tab-disappear');
            appearDisappear(aboutHideElem, 'about-tab-appear', 'about-tab-disappear2');
        } else if (curScroll >= myOffsets[0].offset && curScroll < myOffsets[1].offset) {
            curTabIdx = 0;
            setCurTab(curTabIdx);
            if (!appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear')) {
                appearDisappear(boxElem, 'about-tab-disappear', 'about-tab-appear');
            }
            if (!appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear')) {
                appearDisappear(aboutHideElem, 'about-tab-disappear2', 'about-tab-appear');
            }
        } else if (curScroll >= myOffsets[1].offset && curScroll < myOffsets[2].offset) {
            curTabIdx = 1;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear');
            appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear');
        } else if (curScroll >= myOffsets[2].offset && curScroll < myOffsets[3].offset) {
            curTabIdx = 2;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear');
            appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear');
        } else if (curScroll >= myOffsets[3].offset && curScroll < myOffsets[4].offset) {
            curTabIdx = 3;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear');
            appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear');
        } else if (curScroll >= myOffsets[4].offset && curScroll < myOffsets[5].offset) {
            curTabIdx = 4;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear');
            appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear');
        } else if (curScroll >= myOffsets[5].offset) {
            curTabIdx = 5;
            setCurTab(curTabIdx);
            appearDisappear(boxElem, 'about-tab-init', 'about-tab-appear');
            appearDisappear(aboutHideElem, 'about-tab-init', 'about-tab-appear');
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
                                <li><a href="#about-tab-00-00">name</a></li>
                                <li><a href="#about-tab-00-01">description</a></li>
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
                                <li><a href="#about-tab-01-00">university</a></li>
                                <li><a href="#about-tab-01-01">high school</a></li>
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
                                <li><a href="#about-tab-04-00">english</a></li>
                                <li><a href="#about-tab-04-01">game</a></li>
                                <li><a href="#about-tab-04-02">pwa</a></li>
                                <li><a href="#about-tab-04-03">live</a></li>
                                <li><a href="#about-tab-04-04">walk</a></li>
                                <li><a href="#about-tab-04-05">humal</a></li>
                            </ul>
                        </li>
                        <li>
                            <span
                                onClick={mainTabClicked}
                                className="app-main-about-left-nav-ul-li-span button-rubber"
                                data-idx={5}
                            >
                                Career
                            </span>
                            <ul className="app-main-about-left-nav-ul-li-ul">
                                <li><a href="#about-tab-05">intro</a></li>
                                <li><a href="#about-tab-05-00">part time job</a></li>
                                <li><a href="#about-tab-05-01">full time job</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="space-vertical" id="about-nav-space"/>
                    <div id="about-tab-box" className="app-main-about-left-nav-div about-tab-init">
                        <Link to="/" className="app-main-about-left-nav-div-name">
                            <span className="app-main-about-left-nav-div-name-first">HANSOL</span>
                            <span className="app-main-about-left-nav-div-name-last">YOON</span>
                        </Link>
                        <div className="app-main-about-left-nav-div-search">
                            <input
                                type="text"
                                className="app-main-about-left-nav-div-search-input"
                                placeholder="search"
                            />
                            <img
                                src={searchIcon}
                                className="app-main-about-left-nav-div-search-img"
                            />
                        </div>
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
                    <div >
                        <div id="about-tab-00-00">
                            <span style={{fontSize: '30px', fontWeight: 'bold'}}>HANSOL</span>
                            <span> </span>
                            <span style={{fontSize: '20px'}}>YOON</span>
                        </div>
                        <div className="space-vertical" />
                        <div
                            style={{display: 'flex', flexDirection: 'column', fontSize: "14px"}}
                            id="about-tab-00-01"
                        >
                            <span>address : 경기도 용인시 처인구 금령로173번길 5</span>
                            <span>phone # : +82-10-9099-8225</span>
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
                                title="github"
                            />
                            <img
                                src={instagramIcon}
                                width='40px'
                                className="app-main-about-right-div-p-img instagram-icon"
                                onClick={instagramIconClicked}
                                title="instagram"
                            />
                        </div>
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
                            <span style={{marginTop: "20px"}}>2013.03 ~ 2020.08</span>
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
                            <span style={{marginTop: "20px"}}>2009.03 ~ 2012.02</span>
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
                        <div className="app-main-about-right-div-div-div">
                            <h4>front end</h4>
                            PWA, HTML5, CSS3, JAVASCRIPT (es6 이전, 이후 모두 가능), React, Vue
                        </div>
                        <div className="app-main-about-right-div-div-div">
                            <h4>back end</h4>
                            Websocket (ws protocol) with nodejs
                        </div>
                    </div>
                    <div className="space-vertical" style={{height: '100px'}}/>
                    <div id="about-tab-02-01">
                        <h3>Minor</h3>
                        <div className="app-main-about-right-div-div-div">
                            <h4>front end</h4>
                            Android (Java), jQuery
                        </div>
                        <div className="app-main-about-right-div-div-div">
                            <h4>back end</h4>
                            Django, Flask, Express, Koa, PHP
                        </div>
                    </div>
                    <div className="space-vertical" style={{height: '100px'}}/>
                    <div id="about-tab-02-02">
                        <h3>etc</h3>
                        <div className="app-main-about-right-div-div-div">
                            <h4>database</h4>
                            MySQL, mongo db, indexedDB
                        </div>
                        <div className="app-main-about-right-div-div-div">
                            <h4>language</h4>
                            C, C++, JAVA, python, javascript, R
                        </div>
                        <div className="app-main-about-right-div-div-div">
                            <h4>source code management</h4>
                            git
                        </div>
                        <div className="app-main-about-right-div-div-div">
                            <h4>hardware</h4>
                            raspberry pi, arduino
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
                            <div className="app-main-about-right-div-div-div">
                                member: Yoon han sol(Leader), Park hong je, Lee dong gon<br/><br/>
                                description: null<br/><br/>
                                link: <a href="https://github.com/LinkedPlusPlus/Suroom" target="_blank">here</a>
                            </div>
                            
                        </div>
                        <div>
                            <h4>Smart Career</h4>
                            <div className="app-main-about-right-div-div-div">
                                member: Yoon han sol(Leader), Lee yoo chan, Jung jin man, Han sang il<br/><br/>
                                description: null<br/><br/>
                                link: <a href="https://github.com/ZeroBack0100" target="_blank">here</a>
                            </div>
                        </div>
                        <div>
                            <h4>Medical system for using blockchain</h4>
                            <div  className="app-main-about-right-div-div-div">
                                member : Han su young(Leader), Kim je hyoung, Park si hwan, Yoon han sol<br/><br/>
                                description: null<br/><br/>
                                link: <a href="https://github.com/hermes-dku/project" target="_blank">here</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-vertical" />
                    <div id="about-tab-03-01">
                        <h3>Society</h3>
                        <div>
                            not yet
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
                    <ul style={{display: 'flex', flexDirection: 'column', lineHeight: '30px'}}>
                        <li id="about-tab-04-00">
                            <dl>
                                <dt>english</dt>
                                <dd>conversation</dd>
                            </dl>
                        </li>
                        <li id="about-tab-04-01">
                            <dl>
                                <dt>game</dt>
                                <dd>league of legends</dd>
                                <dd>fifa</dd>
                            </dl>
                        </li>
                        <li id="about-tab-04-02">
                            <dl>
                                <dt>progressive <span style={{fontWeight: 'bold'}}>web</span> app</dt>
                                <dd><a href="https://yhs3434.github.io/yt_deploy/" target="_blank">Your think</a></dd>
                                <dd>durumi (
                                    <a href="https://github.com/yhs3434/durumi_client" target="_blank">client</a>
                                    <span>, </span> 
                                    <a href="https://github.com/yhs3434/durumi_server" target="_blank">server</a>)
                                </dd>
                            </dl>
                        </li>
                        <li id="about-tab-04-03">
                            <dl>
                                <dt>live alone</dt>
                            </dl>
                        </li>
                        <li id="about-tab-04-04">
                            <dl>
                                <dt>walk around the world</dt>
                            </dl>
                        </li>
                        <li id="about-tab-04-05">
                            <dl>
                                <dt>human</dt>
                            </dl>
                        </li>
                    </ul>
                </div>

                <div
                    id="about-tab-05"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Career
                    </h2>
                    <div id="about-tab-05-00">
                        <h3>part time job</h3>
                        <div>
                            <h4>long time</h4>
                            <ul>
                                <li className="career-li"><span>everland attraction 눈썰매장</span> <span>(2011.11 ~ 2011.12)</span></li>
                                <li className="career-li"><span>KRA 한국 마사회 질서유지</span> <span>(2012.01 ~ 2013.01)</span></li>
                                <li className="career-li"><span>GS25</span> <span>(2012.03 ~ 2013.01)</span></li>
                                <li className="career-li"><span>everland Holland Village 주방보조</span> <span>(2013.01 ~ 2013.04)</span></li>
                                <li className="career-li"><span>CU</span> <span>(2016.01 ~ 2017.07)</span></li>
                                <li className="career-li"><span>TGI Friday 홀서빙</span> <span>(2017.09 ~ 2018.03)</span></li>
                                <li className="career-li"><span>단국대 정보기획팀 포털 사이트 관리</span> <span>(2018.03 ~ 2018.08)</span></li>
                                <li className="career-li"><span>단국대 삼성전자 A/S 센터 교내 근로</span> <span>(2018.09 ~ 2019.02)</span></li>
                                <li className="career-li"><span>(주)나비온 교외 근로</span> <span>(2019.03 ~ 2019.07)</span></li>
                                <li className="career-li"><span>카카오 대리운전 기사</span> <span>(2019.12 ~ 2020.02)</span></li>
                            </ul>
                        </div>
                        <div>
                            <h4>shor time</h4>
                            <ul>
                                <li className="career-li"><span>신선 제품 상하차</span> <span>(2016.08)</span></li>
                                <li className="career-li"><span>좋은데이 공병 분류</span> <span>(2017.07)</span></li>
                                <li className="career-li"><span>단국대 대학원 입학처 개발</span> <span>(2019.03~05)</span></li>
                                <li className="career-li"><span>파워리빙센터 주차 요원</span> <span>(2020.05)</span></li>
                            </ul>
                        </div>
                    </div>
                    <div id="about-tab-05-01">
                        <h3>full time job</h3>
                        <ul>
                            <li>not yet</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="app-main-about-hide about-tab-init" id="about-hide-00">
                <ul className="app-main-about-hide-ul">
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-00">
                            About
                        </a>
                    </li>
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-01">
                            Edu
                        </a>
                    </li>
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-02">
                            Skill
                        </a>
                    </li>
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-03">
                            Project
                        </a>
                    </li>
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-04">
                            Interest
                        </a>
                    </li>
                    <li className="app-main-about-hide-ul-li">
                        <a href="#about-tab-05">
                            Career
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}