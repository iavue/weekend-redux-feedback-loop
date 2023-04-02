import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Feeling() {

    const [newFeeling, setFeeling] = useState({feeling: 0});
    const dispatch = useDispatch();
    const history = useHistory();

    // why do i need to pass event 
    function storeTheInput(event) {
        event.preventDefault();
        
        // dispatch
        dispatch({
            type: "STORE_THE_FEELING",
            // what is payload again
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
            <p>Feeling?</p>
            <form onSubmit={storeTheInput}>
                <input 
                    type="number" 
                    placeholder="feeling rating"
                    min="1"
                    max="5" 
                    name="feeling"
                    // why do i need name
                    /*      We need to give this input a name so that we can identify which <input>
                            this is when we submit the form. After we click submit at the Review component, 
                            the data from all the <input>s are collected and sent to the server with their key-value pairs. 
                            If we don't have 'name' here, the server won't know which <input> field corresponds to which value.
                            The 'name' attribute also sets the key of the property in the newFeeling object. 

                            Ex: newFeeling = { feeling: event.target.value }
                                    ^             ^                 ^
                                  object   key/property name      value
                                                   |________________|
                                                            |
                                                         property
                    */
                    value={newFeeling.feeling}
                    /* look at notes below */
                    onChange={(event) => setFeeling({...newFeeling, feeling: event.target.value})} 
                    />
                <button type="submit">Next</button>
            </form>
        </div> 
    )
}

export default Feeling;

/* Notes to better understand what this code is doing: 
    onChange={(event) => setFeeling({...newFeeling, feeling: event.target.value})} 

    When an event is triggered in the browser, such as a button click or an input change, 
    the browser creates an event object and passes it to any functions that are listening 
    for that event. When we use the onChange function in a React component, the onChange function 
    will be called whenever the browser's "onChange" event is triggered by the <input> element.

    The event object contains information about the event that was just triggered. In this case, 
    it contains information about the user's input in the input field. The "event.target" property 
    refers to the HTML element that triggered the event, which in this case is the <input> field.
    The event.target.value property contains the current value of the input field, which is the new 
    value that the user just typed in.

    By passing the event object to the arrow function, we can access the event.target.value property 
    and use it to update the newFeeling state object with the new value that the user just typed in.
    
    The arrow function uses the setFeeling function to update the newFeeling state object.
    Since the newFeeling state is an object with a feeling property (line 7), 
    we need to pass an object with the feeling property set to event.target.value. 
    We also want to practice using the spread operator here too even though we only 
    have one property (feeling), in case we want to add more properties to the state
    object later on.

        For example: 
            const [newFeeling, setFeeling] = useState({feeling: 0, comment: ""});

    If we don't use the spread operator when we update the state, and in the future we 
    add more properties, we will end up overwriting the entire state object with 
    only the feeling property and lose the new property (comment). By using the spread 
    operator, we can ensure that we are only updating the 'feeling' property of the 
    state object while keeping all the other properties intact. 
    
    */