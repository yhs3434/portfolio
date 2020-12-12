import React, { useState, useRef } from 'react';
import "./Root.css";
import { Header } from './header/index';
import { Footer } from './footer/index';
import { Main } from './main/index';

function Root() {
    const [start, setStart] = useState(false);
    const [tab, setTab] = useState('');

    const headerRef = useRef(null);
    const footerRef = useRef(null);

    return(
        <div className="app">
            <header className="app-header" id="app-header-00" ref={headerRef}>
                <Header setTab={setTab}/>
            </header>
            <main
                className="app-main"
                id="app-main-00"
            >
                <Main
                    start={start}
                    setStart={setStart}
                    tab={tab}
                    headerRef={headerRef}
                    footerRef={footerRef}
                />
            </main>
            <footer className="app-footer" id="app-footer-00" ref={footerRef}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Root;