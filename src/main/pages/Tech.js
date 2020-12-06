import React, { useState, useEffect } from 'react';
import './Tech.css';
import axios from 'axios';
import { ListStyle1, TabCategory } from '../../components/index';
import { Pane0 } from '../../components/layout/index';

const serverURI = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

export default function Tech (props) {
    const [curCategory, setCurCategory] = useState("all");
    const [writings, setWritings] = useState(new Array());

    const categoryClicked = (event) => {
        setCurCategory(event.target.dataset.category);
    }

    useEffect(() => {
        axios.get(`http://${serverURI}/tech/category?q=${curCategory}`)
        .then((res) => {
            const {config, data, headers, request, status, statusText} = res;
            const temp = new Array();
            for (const row of data) {
                temp.push(row);
            }
            setWritings(temp);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [curCategory])

    return (
        <Pane0
            left={
                <TabCategory
                    categories={["all", "pwa", "javascript", "html5", "css3"]}
                    categoryClicked={categoryClicked}
                />
            }
            right={
                writings.length > 0
                ? writings.map((item, idx) => (
                    <ListStyle1
                        key={idx}
                        table='tech'
                        id={item.id}
                        title={item.title}
                        created={item.created}
                        changed={item.changed}
                    />
                ))
                : 
                <span className="app-main-tech-right-div-span">There is no data yet.</span>
            }
        />
    )
}