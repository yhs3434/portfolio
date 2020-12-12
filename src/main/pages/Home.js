import React, { useEffect, useRef } from 'react';
import './Home.css';
import brainImage from '../../assets/images/brain.jpg';

export default function Home(props) {
    const {start, setStart, headerRef, footerRef} = props;

    const buttonRef = useRef(null);
    const brainRef = useRef(null);

    useEffect(() => {
        if (start === false) {
            if (window.localStorage.getItem('yhs-init') === null || window.localStorage.getItem('yhs-init') === 'false') {
                window.localStorage.setItem('yhs-init', true);
                // const headerElem = document.getElementById('app-header-00');
                // const footerElem = document.getElementById('app-footer-00');
                const headerElem = headerRef.current;
                const footerElem = footerRef.current;
                headerElem.style.opacity = '0';
                footerElem.style.opacity = '0';
                headerElem.style.visibility = 'hidden';
                footerElem.style.visibility = 'hidden';
            }
        }
        
        return () => window.localStorage.setItem('yhs-init', false);
    }, [])

    const startClicked = () => {
        // const headerElem = document.getElementById('app-header-00');
        // const footerElem = document.getElementById('app-footer-00');
        const headerElem = headerRef.current;
        const footerElem = footerRef.current;
        headerElem.style.transition = "10s";
        footerElem.style.transition = "10s";
        headerElem.style.visibility = 'visible';
        footerElem.style.visibility = 'visible';
        headerElem.style.opacity = '1';
        footerElem.style.opacity = '1';
        // const buttonElem = document.getElementById('app-main-button-00');
        buttonRef.current.style.display = 'none';
        // const brainElem = document.getElementById('app-main-image-00');
        brainRef.current.style.display = 'block';
        setStart(true);
    }

    return(
        <div className="app-main-home">
            <span className="app-main-home-button" ref={buttonRef} onClick={startClicked}>
                <span>길</span>
            </span>
            <img src={brainImage} className="app-main-home-image" ref={brainRef}/>
        </div>
    )
}