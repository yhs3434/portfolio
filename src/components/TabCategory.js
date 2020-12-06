import React from 'react';
import './TabCategory.css';
import { Link, useParams, useHistory } from 'react-router-dom';

export default function TabCategory (props) {
    const { categories, categoryClicked, tab } = props;
    return (
        <nav className="app-tabcategory-wrap">
            <ul className="app-tabcategory-ul">
                {categories.map((category, idx) => (
                    <li key={idx}>
                        <span
                            className="app-tabcategory-ul-li-span button-rubber"
                            onClick={categoryClicked}
                            data-category={category}
                        >
                            {category}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}