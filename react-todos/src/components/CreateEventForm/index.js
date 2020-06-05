import React, { useRef } from "react";
import { Button, Form, Input } from 'reactstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_EVENT, EDIT_EVENT } from "../../utils/actions";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

export default function CreateEventForm({ type, id }) {
    const titleRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        let newEvent;
        if (type === "create") {
            newEvent = {
                _id: uuidv4(),
                title: titleRef.current.value,
                startTime: "",
                endTime: "",
                duration: ""
            };
            dispatch({
                type: ADD_EVENT,
                post: newEvent
            })
        }

        if (type === "edit") {
            dispatch({
                type: EDIT_EVENT,
                title: titleRef.current.value,
                _id: id
            })
        }

        titleRef.current.value = "";
    };

    return (
        <div className="formContainer">
            <Form onSubmit={handleSubmit}>
                <Input required innerRef={titleRef} placeholder="Title" />
                <Button className="btn btn-success mt-3 mb-4" type="submit">Save Event</Button>
            </Form>
        </div>
    )
}
