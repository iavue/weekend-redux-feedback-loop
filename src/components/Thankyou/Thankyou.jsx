import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function Thankyou() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLeaveNewFeedback = () => {
        console.log('Inside handleLeaveNewFeedback()');
        // Reset the survey from the beginning
        dispatch({
            type: "RESET"
        });
        history.push('/');
    }
    

    return (
        <>
        <div>
            <h1>⭐️ Feedback!</h1>
        </div>
        <div>
            <h2>Thank You!</h2>
            <br/>
            <button onClick={handleLeaveNewFeedback}>Leave New Feedback</button>
        </div>
        </>
    )
}

export default Thankyou;