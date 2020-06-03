import React from 'react';
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT } from "../../utils/actions";

export default function EventList() {
    const [{events}, dispatch] = useStoreContext();

    const removeEvent = id => {
        dispatch({
            type: REMOVE_EVENT,
            _id: id
        })
    };

    return (
        <>
            <h1>All Events</h1>
            <h3 className="mb-5 mt-5">Click on a event to view</h3>
            {events.length ? (
                <div>
                    {events.map(event => {
                        return (<div key={event._id}>
                            <Link to={"/event/" + event._id}>
                                <strong>
                                {event.title} at {event.startTime} for {event.duration}
                                </strong>
                            </Link>
                            <button onClick={() => removeEvent(event._id)} >X</button>
                        </div>)
                    })}
                </div>
            ) : (
                <h3>You haven't added any events yet!</h3>
            )}
        </>
    )
}
