import React, { useState, useEffect } from 'react';
import "./About.css";
import githubIcon from '../../assets/images/github.png';
import instagramIcon from '../../assets/images/instagram.png';

export default function About() {
    const [curTab, setCurTab] = useState(0);

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

    useEffect(() => {
        const parent = document.getElementById('app-main-about-left-nav-ul-0');
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[1].className = parent.children[i].children[1].className.replace(' tab-active', '')
        }
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
                                <li><a href="#about-tab-00">intro</a></li>
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
                </nav>
            </div>

            <div className="app-main-about-right">
                <div
                    id="about-tab-00"
                    className="app-main-about-right-div"
                >
                    <h2 class="app-main-about-right-div-title">
                        About
                    </h2>
                    <p>
                        <span style={{fontSize: '30px'}}>HANSOL</span>
                        <span> </span>
                        <span style={{fontSize: '20px'}}>YOON</span>
                    </p>
                    <p style={{display: 'flex', flexDirection: 'column', fontSize: "14px"}}>
                        <span>주소 : 경기도 용인시 처인구 금령로173번길 5</span>
                        <span>번호 : +82-10-9099-8225</span>
                        <span>Email : yhs3434@gmail.com</span>
                    </p>
                    <p style={{display: 'flex', alignItems: 'center'}}>
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
                    </p>
                </div>

                <div
                    id="about-tab-01"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Education
                    </h2>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>University Of Dankook</span>
                            <span>Bachelor Of Computer Science</span>
                            <span>Software Engineering</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>2013.03 ~ 2020.08</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>Taesung High School</span>
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
                    section 02
                </div>

                <div
                    id="about-tab-03"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Projects
                    </h2>
                    section 03
                </div>

                <div
                    id="about-tab-04"
                    className="app-main-about-right-div"
                >
                    <h2 className="app-main-about-right-div-title">
                        Interests
                    </h2>
                    section 04
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