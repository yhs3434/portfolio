import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <div>
            <Link to="/customercenter" className="button-rubber">문의</Link>
            <Link to="/license" className="button-rubber">오픈소스 라이선스</Link>
        </div>
    )
}