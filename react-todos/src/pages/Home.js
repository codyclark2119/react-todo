import React, { useEffect } from 'react';
import CreateEventForm from '../components/CreateEventForm';
import EventList from '../components/EventList';
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import  { GET_EVENTS } from "../utils/actions";

export default function Home() {
    const [{events}, dispatch] = useStoreContext();

    const loadEvents = () => {
        dispatch({
            type: GET_EVENTS
        })
    }

    useEffect(loadEvents, events)

    return (
        <div id='home-page'>
            <h1>Home</h1>
            <CreateEventForm />
            <EventList />
            <div className="mt-5">
                <Link to="/reoccuring">View Reoccuring</Link>
            </div>
        </div>
    )
}
