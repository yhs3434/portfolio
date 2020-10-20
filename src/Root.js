import React, { useState, useEffect } from 'react';

import { Header } from './header/index';
import { Footer } from './footer/index';
import { MenuList } from './nav/index';
import { Body } from './body/index';

import { useHistory } from 'react-router-dom';

function Root() {
    return(
        <>
            <header>
                <Header />
            </header>
            <nav>
                <MenuList />
            </nav>
            <section>
                <Body />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Root;