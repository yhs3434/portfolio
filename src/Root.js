import React, { useState, useEffect } from 'react';
import "./Root.css";

import { Header } from './header/index';
import { Footer } from './footer/index';
import { MenuList } from './nav/index';
import { Body } from './body/index';

function Root() {
    return(
        <div className="div_wrap">
            <header id="header_1">
                <Header />
            </header>
            <div id="nav_section_split_1">
                <nav id="nav_1">
                    <MenuList />
                </nav>
                <section id="body_1">
                    <Body />
                </section>
            </div>
            <footer id="footer_1">
                <Footer />
            </footer>
        </div>
    )
}

export default Root;