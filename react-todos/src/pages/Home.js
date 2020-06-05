import React from 'react';
import CreateEventForm from '../components/CreateEventForm';
import EventList from '../components/EventList';

export default function Home() {
    return (
        <div id='home-page'>
            <h2 className='subHeader'>Create a Event for your day!</h2>
            <CreateEventForm type="create"/>
            <EventList location="home" />
        </div>
    )
}
