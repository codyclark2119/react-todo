import React, { useRef } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EVENT, EDIT_EVENT } from "../../utils/actions";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

export default function CreateEventForm({type, id}) {
    const titleRef = useRef();
    const startTimeRef = useRef();
    const durationRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        let newEvent;
        if(type === "create"){
            newEvent = {      
                _id: uuidv4(),    
                title: titleRef.current.value,
                startTime: startTimeRef.current.value,
                duration: durationRef.current.value
            };
            dispatch({
                type: ADD_EVENT,
                post: newEvent
            })
        }

        if(type === "edit"){
            console.log(id)
            newEvent = {    
                _id: id,  
                title: titleRef.current.value,
                startTime: startTimeRef.current.value,
                duration: durationRef.current.value
            };
            dispatch({
                type: EDIT_EVENT,
                post: newEvent,
                _id: id
            })
        }
    
        titleRef.current.value = "";
        startTimeRef.current.value = "";
        durationRef.current.value = "";
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input required innerRef={titleRef} placeholder="Title" />
                <Input required innerRef={startTimeRef} placeholder="Start Time" />
                <Input innerRef={durationRef} placeholder="Duration (min)" />
                <Button className="btn btn-success mt-3 mb-5" type="submit">Save Post</Button>
            </form>
        </div>
    )
}
