import React, { useState, useEffect } from 'react';
import "./Root.css";

import { Header } from './header/index';
import { Footer } from './footer/index';
import { Nav } from './nav/index';
import { Main } from './main/index';

function Root() {
    return(
        <div className="app">
            <header className="header">
                <Header />
                <nav className="nav">
                    <Nav />
                </nav>
            </header>
            <main className="body">
                <Main />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Root;