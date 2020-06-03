import React, { useEffect } from 'react'
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_EVENT, GET_EVENTS } from "../utils/actions";
import CreateEventForm from "../components/CreateEventForm";

export default function Event(props) {
    const [{currentEvent}, dispatch] = useStoreContext();

    const loadEvent = () => {
        dispatch({
            type: GET_EVENTS
        })
        dispatch({ 
            type: SET_CURRENT_EVENT, 
            _id: props.match.params.id
        })
    }

    useEffect(loadEvent, []);

    return (
        <div id="event-page">
            <h1>{`${currentEvent.title} at ${currentEvent.startTime}`}</h1>
            <h3>Need to edit your event?</h3>
            <CreateEventForm type="edit" id={props.match.params.id}/>
        </div>

    )
}
