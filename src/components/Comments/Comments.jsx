import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Comments() {

    const [newComments, setComments] = useState({comments: ''});
    const dispatch = useDispatch();
    const history = useHistory();

    function storeTheInput(event) {
        event.preventDefault();
        
        // dispatch
        dispatch({
            type: "STORE_THE_COMMENTS",
            payload: newComments
        });
        console.log('newComments object:', newComments);
        // history.push
        history.push("/review");
    }
    
    return (
        <div>
            <h2>Any comment you want to leave?</h2>
            <br />
            <form onSubmit={storeTheInput}>
                <input 
                    type="text" 
                    placeholder="comments" 
                    min="1"
                    max="5"
                    name="comments"
                    value={newComments.comments} 
                    onChange={(event) => setComments({...newComments, comments: event.target.value})} 
                    />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Comments;