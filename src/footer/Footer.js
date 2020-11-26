import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Footer.css';
import mainLogo from '../assets/images/monochrome_photos.svg';
import customercenterIcon from '../assets/images/face.svg';
import licenseIcon from '../assets/images/chrome_reader_mode.svg';

export default function Footer() {
    const history = useHistory();

    const buttonClicked = (event) => {
        const val = event.target.dataset.val;
        history.push(`/${val}`);
    }

    return(
        <div className="app-footer-total">
            <div className="app-footer-left">
                <Link to="/">
                    <span className="app-footer-left-first">HANSOL</span>
                    <span className="app-footer-left-last">YOON</span>
                </Link>
            </div>
            <div className="app-footer-right">
                <div className="app-footer-right-big">
                    <Link to="/customercenter" className="button-rubber">문의</Link>
                    <Link to="/license" className="button-rubber">오픈소스 라이선스</Link>
                </div>
                <div className="app-footer-right-small">
                    <img
                        src={customercenterIcon}
                        className="app-footer-right-small-icon button-rubber"
                        data-val="customercenter"
                        onClick={buttonClicked}
                        title="customer center"
                    />
                    <img
                        src={licenseIcon}
                        className="app-footer-right-small-icon button-rubber"
                        data-val="license"
                        onClick={buttonClicked}
                        title="opensource license"
                    />
                </div>
            </div>
        </div>
    )
}