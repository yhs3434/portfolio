import React, { useState, useEffect } from 'react';
import "./Root.css";
import { Header } from './header/index';
import { Footer } from './footer/index';
import { Main } from './main/index';

function Root() {
    return(
        <div className="app">
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <Main />
            </main>
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Root;