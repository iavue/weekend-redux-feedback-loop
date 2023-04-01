import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Review() {

    const history = useHistory();

    const feeling = useSelector(store => store.feelingInput);
    const understanding = useSelector(store => store.understandingInput);
    const supported = useSelector(store => store.supportedInput);
    const comments = useSelector(store => store.commentsInput);

    let feedback = {
        feeling: feeling,
        understanding: understanding,
        supported: supported,
        comments: comments
    }


    function handleSubmit() {
        console.log('Submitting feedback:', feedback);
        axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log('In POST', response);
        })
        .catch((err) => console.log('Feedback POST error:', err))

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