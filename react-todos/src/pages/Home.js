import React from 'react';
import CreateEventForm from '../components/CreateEventForm';
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_EVENT, SAVE_EVENTS, } from "../../utils/actions";

export default function Home() {
    const [state, dispatch] = useStoreContext();

    const removeEvent = id => {
          dispatch({
            type: REMOVE_EVENT,
            _id: id
          }).catch(err => console.log(err));
    };
  
    const getEvents = () => {
          dispatch({
            type: SAVE_EVENTS,
            posts: results.data
          }).catch(err => console.log(err));
    };
  
    useEffect(() => {
      getEvents();
    }, []);

    return (
        <div id='home-page'>
            <h1>Home</h1>
            <CreateEventForm />
            <h1>All Events</h1>
            <h3 className="mb-5 mt-5">Click on a event to view</h3>
            {state.events.length ? (
                <List>
                {state.events.map(event => (
                    <ListItem key={event._id}>
                    <Link to={"/event/" + event._id}>
                        <strong>
                        {event.title}
                        </strong>
                    </Link>
                    <DeleteBtn onClick={() => removeEvent(event._id)} />
                    </ListItem>
                ))}
                </List>
            ) : (
                <h3>You haven't added any posts yet!</h3>
            )}
            <div className="mt-5">
                <Link to="/reoccuring">View Reoccuring</Link>
            </div>
        </div>
    )
}
