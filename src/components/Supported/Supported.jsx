import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Supported() {

    const [newSupported, setSupported] = useState({supported: 0});
    const dispatch = useDispatch();
    const history = useHistory();

    function storeTheInput(event) {
        event.preventDefault();
        
        // dispatch
        dispatch({
            type: "STORE_THE_SUPPORTED",
            payload: newSupported
        });
        console.log('newSupported object:', newSupported);
        // history.push
        history.push("/comments");
    }
    
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <br />
            <form onSubmit={storeTheInput}>
                <input 
                    type="number" 
                    placeholder="supported rating" 
                    min="1"
                    max="5"
                    name="supported"
                    value={newSupported.supported} 
                    onChange={(event) => setSupported({...newSupported, supported: event.target.value})} 
                    />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Supported;