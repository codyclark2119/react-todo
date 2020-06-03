import React, { useEffect } from 'react'
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_EVENT, GET_EVENTS } from "../utils/actions";


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

    console.log(props.match.params.id)
    return (
        <>
            <h1>{currentEvent.title} {currentEvent._id}</h1>
        </>
    )
}
