import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Feeling() {

    const [newFeeling, setFeeling] = useState({feeling: 0});
    const dispatch = useDispatch();
    const history = useHistory();

    function storeTheInput() {
        event.preventDefault();
        
        // dispatch
        dispatch({
            type: "STORE_THE_FEELING",
            payload: newFeeling
        });
        console.log('newFeeling object:', newFeeling);
        // history.push
        history.push("/understanding");
    }
    
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <br />
            <form onSubmit={storeTheInput}>
                <input 
                    type="number" 
                    placeholder="Feeling?" 
                    value={newFeeling.feeling} 
                    onChange={(event) => setFeeling(event.target.value)} 
                    />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Feeling;