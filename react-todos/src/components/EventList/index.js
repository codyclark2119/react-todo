import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT, GET_EVENTS } from "../../utils/actions";
import "./style.css"

export default function EventList() {
    const [{events}, dispatch] = useStoreContext();

    const removeEvent = id => {
        dispatch({
            type: REMOVE_EVENT,
            _id: id
        })
    };

    const loadEvents = () => {
        dispatch({
            type: GET_EVENTS
        })
    }

    useEffect(loadEvents, [])

    return (
        <>
            <h1>All Events</h1>
            <h3 className="mb-5 5">Click on a event to view</h3>
            {events.length ? (
                <div>
                    {events.map(event => {
                        if(event !== null) {
                            return (<div key={event._id} className='eventItem'>
                                <Link to={"/event/" + event._id}>
                                    {`${event.title} at ${event.startTime}`}
                                </Link>
                                <Button color="danger" className='delButton' onClick={() => removeEvent(event._id)} >X</Button>
                            </div>)  
                        }
                    })}
                </div>
            ) : (
                <h3>You haven't added any events yet!</h3>
            )}
        </>
    )
}
