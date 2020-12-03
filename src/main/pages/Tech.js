import React, { useState, useEffect } from 'react';
import './Tech.css';
import axios from 'axios';
import { ListStyle1, TabCategory } from '../../components/index';

const serverURI = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

export default function Tech (props) {
    const [curCategory, setCurCategory] = useState("all");
    const [writings, setWritings] = useState(new Array());

    const tabClicked = (event) => {
        const curTab = event.target.dataset.category;
        setCurCategory(curTab);
    }

    useEffect(() => {
        emptyWritings();
        axios.get(`http://${serverURI}/tech/category?q=${curCategory}`)
        .then((res) => {
            const {config, data, headers, request, status, statusText} = res;
            const temp = new Array();
            for (const row of data) {
                temp.push(row);
            }
            addMoreWritings(temp);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [curCategory])

    const emptyWritings = () => {
        setWritings(new Array());
    }

    const addMoreWritings = (writing) => {
        setWritings(prevItems => [...prevItems, ...writing]);
    }

    return (
        <div className="app-main-tech">
            <div className="app-main-tech-left">
                <TabCategory
                    tabs={["all", "pwa", "javascript", "html5", "css3"]}
                    tabClicked={tabClicked}    
                />
            </div>
            <div className="app-main-tech-right">
                {
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
                    <div className="app-main-tech-right-div">
                        <span className="app-main-tech-right-div-span">There is no data yet.</span>
                    </div>
                }
            </div>
        </div>
    )
}