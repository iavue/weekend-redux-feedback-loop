import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Review() {

    const history = useHistory();

    const feeling = useSelector(store => store.feelingInput);
    const understanding = useSelector(store => store.understandingInput);
    const supported = useSelector(store => store.supportedInput);
    const comments = useSelector(store => store.commentsInput);


    function handleSubmit() {
        
        // history.push
        history.push("/thankyou");
    }
    
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <br />
            <ul>
                <li>Feeling: {feeling.toString()}</li>
                <li>Understanding: {understanding.toString()}</li>
                <li>Supported: {supported.toString()}</li>
                <li>Comments: {comments.toString()}</li>
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;