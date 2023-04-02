import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from "axios";

function Review() {

    const history = useHistory();

    // Since the properties in the Redux store are actually objects, we need to access their values using dot notation twice
    const feeling = useSelector(store => store.feelingInput.feeling);
    const understanding = useSelector(store => store.understandingInput.understanding);
    const supported = useSelector(store => store.supportedInput.supported);
    const comments = useSelector(store => store.commentsInput.comments);

    console.log('Feeling:', feeling);
    console.log('Understanding:', understanding);

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
                <li>Feeling: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Supported: {supported}</li>
                <li>Comments: {comments}</li>
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;