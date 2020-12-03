import React from 'react';
import './TabCategory.css';

export default function TabCategory (props) {
    const { tabs, tabClicked } = props;
    return (
        <nav className="app-tabcategory-wrap">
            <ul className="app-tabcategory-ul">
                {tabs.map((tab, idx) => (
                    <li key={idx}>
                        <span
                            className="app-tabcategory-ul-li-span button-rubber"
                            onClick={tabClicked}
                            data-category={tab}
                        >
                            {tab}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}