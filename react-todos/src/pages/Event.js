import React, { useEffect } from 'react'
import moment from 'moment';
import { Button } from 'reactstrap';
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_EVENT, REMOVE_EVENT, GET_EVENTS, END_EVENT, START_EVENT, SAVE_EVENT, GET_COMPLETE } from "../utils/actions";
import CreateEventForm from "../components/CreateEventForm";

export default function Event(props) {
    const [{ currentEvent }, dispatch] = useStoreContext();

    const loadEvent = () => {
        dispatch({
            type: GET_EVENTS
        })
        dispatch({
            type: GET_COMPLETE
        })
        dispatch({
            type: SET_CURRENT_EVENT,
            _id: props.match.params.id
        })
    }

    const removeEvent = id => {
        dispatch({
            type: REMOVE_EVENT,
            _id: id
        })
    };

    const startEvent = id => {
        console.log(moment().format("hh:mm A"))
        dispatch({
            type: START_EVENT,
            startTime: moment().format("hh:mm A"),
            _id: id
        })
    }

    const endEvent = id => {
        console.log(moment().format("hh:mm A"))
        dispatch({
            type: END_EVENT,
            endTime: moment().format("hh:mm A"),
            _id: id
        })
    }

    const saveEvent = id => {
        dispatch({
            type: SAVE_EVENT,
            _id: id
        })
    }

    const dynamicButton = (event) => {
        if (event.startTime === "") {
            return <Button color="success" className='delButton' onClick={() => startEvent(event._id)} >Start</Button>
        }
        else if (event.endTime === "") {
            return <Button color="primary" className='delButton' onClick={() => endEvent(event._id)} >Complete</Button>
        }
        else {
            return <Button color="warning" className='delButton' onClick={() => saveEvent(event._id)} >Save</Button>
        }
    }

    useEffect(loadEvent, []);

    return (
        <div id="event-page">
            {currentEvent ?
                <>
                    {currentEvent._id !== 0 ?
                        <div id='eventDisplay'>
                            <div className="eventHeaders">
                                <h1>{currentEvent.startTime === "" ? `${currentEvent.title} hasn't started yet!` :
                                    `${currentEvent.title} started at ${currentEvent.startTime}!`}</h1>
                                <h2>{currentEvent.endTime === "" ? `${currentEvent.title} hasn't ended yet!` :
                                    `${currentEvent.title} Ended at ${currentEvent.endTime}!`}</h2>
                            </div>
                            <h3>Need to edit your event title?</h3>
                            <CreateEventForm type="edit" id={props.match.params.id} />
                            <div className='btnContainer'>
                                {dynamicButton(currentEvent)}
                                <Button color="danger" className='delButton' onClick={() => removeEvent(currentEvent._id)} >Delete</Button>
                            </div>
                        </div> : <h1>Event Deleted!</h1>
                    }
                </>
                : <h1>No event to display!</h1>
            }
        </div>
    )
}
