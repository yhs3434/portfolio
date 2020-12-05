import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function unixTimeToDate(t) {
    const date = new Date(t * 1000);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year} ${month} ${day} - ${hour} ${minute} ${second}`;
}

export default function Detail (props) {
    const params = useParams();
    const history = useHistory();

    const [values, setValues] = useState({});

    const backClicked = () => {
        history.goBack();
    }

    const { id, table } = params;

    const protocol = process.env.REACT_APP_PROTOCOL;
    const host = process.env.REACT_APP_SERVER_HOST;
    const port = process.env.REACT_APP_SERVER_PORT;
    const url = `${protocol}://${host}:${port}/${table}/detail/${id}`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                if (response.data.status !== 'success') return;
                let { title, content, category, created, changed } = response.data.data;
                created = unixTimeToDate(created);
                changed = unixTimeToDate(changed);
                setValues({
                    title, content, category, created, changed
                })
            })
    }, [])

    return (
        <div>
            <p>{values.title}</p>
            <p>{values.content}</p>
            <p>{values.created}</p>
            <p>{values.changed}</p>
            <button onClick={backClicked}>뒤로가기</button>
        </div>
    )
}