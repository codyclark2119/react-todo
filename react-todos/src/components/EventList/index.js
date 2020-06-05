import React, { useEffect } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT, GET_EVENTS, END_EVENT, START_EVENT, SAVE_EVENT } from "../../utils/actions";
import "./style.css"

export default function EventList() {
    const [{events}, dispatch] = useStoreContext();

    const removeEvent = id => {
        dispatch({
            type: REMOVE_EVENT,
            _id: id
        })
    };

    const startEvent = id => {
        dispatch({
            type: START_EVENT,
            startTime: moment().format("hh:mm A"),
            _id: id
        })
    }

    const endEvent = id => {
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

    const loadEvents = () => {
        dispatch({
            type: GET_EVENTS
        })
    }

    const dynamicButton = (event) =>{
        if (event.startTime === "") {
           return <Button color="success" className='delButton' onClick={() => startEvent(event._id)} >Start</Button>
        }
        else if(event.endTime === "") {
            return <Button color="primary" className='delButton' onClick={() => endEvent(event._id)} >Complete</Button>
        }
        else{
            return <Button color="warning" className='delButton' onClick={() => saveEvent(event._id)} >Save</Button>
        }
    }

    useEffect(loadEvents, [])

    return (
        <>
            <h1>All Events</h1>
            <h3>Click on a event to view</h3>
            { events.length ? (
                <div id="eventList">
                    {events.map(event => {
                        return (
                        <div key={event._id} className='eventItem'>
                            <div className="eventText">
                                <Link to={"/event/" + event._id}>
                                    {event.title}
                                </Link>
                            </div>
                            <div className="eventBtns">
                                {dynamicButton(event)}
                                <Button color="danger" className='delButton' onClick={() => removeEvent(event._id)} >Delete</Button>
                            </div>
                        </div>)  
                    })}
                </div>
            ) : (
                <h3 className='noEventHeader'>You haven't added any events yet!</h3>
            )}
        </>
    )
}
