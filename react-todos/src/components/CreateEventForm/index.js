import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EVENT } from "../../utils/actions";
import { Button, Form, Input } from 'reactstrap';

export default function CreateEventForm() {
    const titleRef = useRef();
    const startTimeRef = useRef();
    const durationRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        let newEvent = {          
            title: titleRef.current.value,
            startTime: startTimeRef.current.value,
            duration: durationRef.current.value
        };

        dispatch({
            type: ADD_EVENT,
            post: newEvent
        }).catch(err => console.log(err));
    
        titleRef.current.value = "";
        startTimeRef.current.value = "";
        durationRef.current.value = "";
      };

    return (
        <div>
            <h4>Create a Event for your day!</h4>
            <Form onSubmit={handleSubmit}>
                <Input  required ref={titleRef} placeholder="Title" />
                <Input  required ref={startTimeRef} placeholder="Start Time" />
                <Input  ref={durationRef} placeholder="Duration (min)" />
                <Button className="btn btn-success mt-3 mb-5" type="submit">Save Post</Button>
            </Form>
        </div>
    )
}
