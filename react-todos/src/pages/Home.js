import React from 'react';
import CreateEventForm from '../components/CreateEventForm';
import EventList from '../components/EventList';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id='home-page'>
            <h1>Home</h1>
            <h4 className='subHeader'>Create a Event for your day!</h4>
            <CreateEventForm type="create"/>
            <EventList />
            <div className="mt-5">
                <Link to="/reoccuring">View Reoccuring</Link>
            </div>
        </div>
    )
}
