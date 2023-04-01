import { useHistory } from 'react-router-dom'

function Thankyou() {

    const history = useHistory();

    const handleLeaveNewFeedback = () => {
        console.log('Inside handleLeaveNewFeedback()');
        // Reset the survey from the beginning
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