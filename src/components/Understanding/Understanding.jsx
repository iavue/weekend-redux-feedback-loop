import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Understanding() {

    const [newUnderstanding, setUnderstanding] = useState({understanding: 0});
    const dispatch = useDispatch();
    const history = useHistory();

    function storeTheInput() {
        event.preventDefault();
        
        // dispatch
        dispatch({
            type: "STORE_THE_UNDERSTANDING",
            payload: newUnderstanding
        });
        console.log('newUnderstanding object:', newUnderstanding);
        // history.push
        history.push("/supported");
    }
    
    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <br />
            <form onSubmit={storeTheInput}>
                <input 
                    type="number" 
                    placeholder="Understanding?" 
                    value={newUnderstanding.understanding} 
                    onChange={(event) => setUnderstanding(event.target.value)} 
                    />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Understanding;