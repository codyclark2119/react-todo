import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT, GET_EVENTS, END_EVENT, START_EVENT, SAVE_EVENT, GET_SAVED, REMOVE_SAVED } from "../../utils/actions";
import "./style.css"

export default function EventList({location}) {
    const [{events, saved}, dispatch] = useStoreContext();
    const [fade , setFade] = useState(false);
    
    const loadEvents = () => {
        dispatch({
            type: GET_EVENTS
        })
        dispatch({
            type: GET_SAVED
        })
    }
    
    const startEvent = id => {
        setFade(true)
        setTimeout(function(){ 
            dispatch({
                type: START_EVENT,
                _id: id
            })
            setFade(false); 
        }, 1000);
    }
    
    const endEvent = id => {
        setFade(true)
        setTimeout(function(){ 
            dispatch({
                type: END_EVENT,
                _id: id
            })
            setFade(false); 
        }, 1000);
    }
    
    const saveEvent = id => {
        setFade(true)
        setTimeout(function(){ 
            dispatch({
                type: SAVE_EVENT,
                _id: id
            })
            setFade(false); 
        }, 1000);
    }
    
    const removeEvent = id => {
        setFade(true);
        setTimeout(function(){ 
            dispatch({
                type: REMOVE_EVENT,
                _id: id
            })
            setFade(false); 
        }, 1000);
    };

    const removeSaved = id => {
        setFade(true);
        setTimeout(function(){ 
            dispatch({
                type: REMOVE_SAVED,
                _id: id
            })
            setFade(false); 
        }, 1000);
    };

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
        {location === "home" ? 
            <>
                <h1 className="eventHeader">All Events</h1>
                <h3 className="eventSubheader">Click on a event to view</h3>
                { events.length ? (
                    <div className="eventList">
                        {events.map(event => {
                            return (
                            <div key={event._id} className={fade ? 'fadeOut eventItem' : 'fadeIn eventItem'}>
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
            </> :
            <> 
                <h1 className="eventHeader">All Saved Events</h1>
                <h3 className="eventSubheader">Click on a event to view</h3>
                { saved.length ? (
                    <div className="eventList">
                        {saved.map(event => {
                            return (
                                <div key={event._id} className={fade ? 'fadeOut eventItem' : 'fadeIn eventItem'}>
                                <div className="eventText">
                                    <Link to={"/event/" + event._id}>
                                        {event.title}
                                    </Link>
                                </div>
                                <div className="eventBtns">
                                    <Button color="danger" className='delButton' onClick={() => removeSaved(event._id)} >Delete</Button>
                                </div>
                            </div>)  
                        })}
                    </div>
                ) : (
                    <h3>You haven't saved any events yet!</h3>
                )}
            </>
        }
        </>
    )
}
