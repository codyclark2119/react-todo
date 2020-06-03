import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EVENT } from "../../utils/actions";
import { v4 as uuidv4 } from 'uuid';

export default function CreateEventForm() {
    const titleRef = useRef();
    const startTimeRef = useRef();
    const durationRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        let newEvent = {      
            _id: uuidv4(),    
            title: titleRef.current.value,
            startTime: startTimeRef.current.value,
            duration: durationRef.current.value
        };

        dispatch({
            type: ADD_EVENT,
            post: newEvent
        })
    
        titleRef.current.value = "";
        startTimeRef.current.value = "";
        durationRef.current.value = "";
      };

    return (
        <div>
            <h4>Create a Event for your day!</h4>
            <form onSubmit={handleSubmit}>
                <input required ref={titleRef} placeholder="Title" />
                <input required ref={startTimeRef} placeholder="Start Time" />
                <input ref={durationRef} placeholder="Duration (min)" />
                <button className="btn btn-success mt-3 mb-5" type="submit">Save Post</button>
            </form>
        </div>
    )
}
