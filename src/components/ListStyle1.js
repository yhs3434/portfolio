import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ListStyle1.css";

export default function ListStyle1 (props) {
    const { table, id, title, created, changed } = props;

    const history = useHistory();

    const titleClicked = (event) => {
        history.push(`/detail/${table}/${id}`);
    }

    return (
        <div className="app-liststyle1-wrap">
            <span
                className="app-liststyle1-title"
                onClick={titleClicked}
            >
                {title}
            </span>
            <span className="app-liststyle1-created">{created}</span>
        </div>
    )
}