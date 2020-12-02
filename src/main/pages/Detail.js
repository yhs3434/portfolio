import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function Detail (props) {
    const params = useParams();
    const history = useHistory();

    const backClicked = () => {
        history.goBack();
    }

    return (
        <div>
            {params.table}|{params.id}
            <button onClick={backClicked}>뒤로가기</button>
        </div>
    )
}