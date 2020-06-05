import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_COMPLETE, GET_COMPLETE } from "../utils/actions";

export default function CompleteList() {
    const [{complete}, dispatch] = useStoreContext();

    const removeSaved = id => {
        dispatch({
            type: REMOVE_COMPLETE,
            _id: id
        })
    };

    const loadEvents = () => {
        dispatch({
            type: GET_COMPLETE
        })
    }

    useEffect(loadEvents, [])

    return (
        <div id="complete-page">
            <h1>All Saved Events</h1>
            <h3 className="mb-5 5">Click on a event to view</h3>
            { complete.length ? (
                <div id="eventList">
                    {complete.map(event => {
                        return (<div key={event._id} className='eventItem'>
                            <Link to={"/event/" + event._id}>
                                {event.title}
                            </Link>
                            <Button color="danger" className='delButton' onClick={() => removeSaved(event._id)} >Delete</Button>
                        </div>)  
                    })}
                </div>
            ) : (
                <h3>You haven't saved any events yet!</h3>
            )}
        </div>
    )
}
