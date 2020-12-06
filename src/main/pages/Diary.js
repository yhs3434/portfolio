import React, { useState, useEffect } from 'react';
import "./Diary.css";
import { TabCategory, ListStyle1 } from '../../components/index';
import { Pane0 } from '../../components/layout/index';
import axios from 'axios';

const serverURI = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

export default function Diary(props) {
    const [curCategory, setCurCategory] = useState("all");
    const [writings, setWritings] = useState(new Array());
    
    const categoryClicked = (event) => {
        setCurCategory(event.target.dataset.category);
    }

    useEffect(() => {
        axios.get(`http://${serverURI}/diary/category?q=${curCategory}`)
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

    return(
        <Pane0
            left={
                <TabCategory
                    categories={["all", "daily life", "think"]}
                    categoryClicked={categoryClicked}
                />
            }
            right={
                writings.length > 0
                ? writings.map((item, idx) => (
                    <ListStyle1
                        key={idx}
                        table='diary'
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