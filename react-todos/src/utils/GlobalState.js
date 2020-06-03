import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_EVENT,
    ADD_EVENT,
    REMOVE_EVENT,
    GET_EVENTS,
    EDIT_EVENT,
    ADD_REOCCURING,
    REMOVE_REOCCURING,
    GET_REOCCURING
} from "./actions"

const StoreContext = createContext();
const { Provider } = StoreContext;

const save = (arr, name) => {
    localStorage.setItem(name, JSON.stringify(arr))
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_EVENT:
            let newCurr = state.events.filter((event) => event._id === action._id)
            return {
                ...state,
                currentEvent: newCurr[0]
            };

        case ADD_EVENT:
            localStorage.removeItem("events");
            save([action.post, ...state.events], 'events')
            return {
                ...state,
                events: [action.post, ...state.events]
            };

        case REMOVE_EVENT:
            localStorage.removeItem("events");
            save((state.events.filter((event) => {
                return event._id !== action._id;
            })), 'events')

            return {
                ...state,
                events: state.events.filter((event) => {
                    return event._id !== action._id;
                })
            };

        case EDIT_EVENT: 
            localStorage.removeItem("events");
            let editArr = state.events.filter((event) => {
                return event._id !== action._id;
            });
            editArr = [action.post, ...editArr];
            save(editArr, 'events')
            return {
                ...state,
                currentEvent: action.post,
                events: [...editArr]
            }

        case GET_EVENTS:
            let eventList = JSON.parse(localStorage.getItem('events'));
            if(eventList !== null){
                eventList = eventList.filter(event => event !== null)
            }
            save(eventList, "events");
            return {
                ...state,
                events: [].concat(eventList)
            };

        case ADD_REOCCURING:
            localStorage.removeItem("reoccuring");
            save([action.post, ...state.reoccuring], 'reoccuring')
            return {
                ...state,
                reoccuring: [action.post, ...state.reoccuring]
            };

        case REMOVE_REOCCURING:
            localStorage.removeItem("reoccuring");
            save((state.reoccuring.filter((event) => {
                return event._id !== action._id;
            })), 'reoccuring')
            return {
                ...state,
                reoccuring: state.reoccuring.filter((event) => {
                    return event._id !== action._id;
                })
            };

        case GET_REOCCURING:
            return {
                ...state,
                reoccuring: [...state.reoccuring].concat(JSON.parse(localStorage.getItem('reoccuring')))
            };

        default:
            return state;
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        events: [],
        currentEvent: {
            _id: 0,
            title: "",
            startTime: "",
            duration: ""
        },
        reoccuring: []
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };