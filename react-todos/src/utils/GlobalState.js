import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_EVENT,
    ADD_EVENT,
    REMOVE_EVENT,
    GET_EVENTS,
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
            console.log(newCurr)
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

        case GET_EVENTS:
            return {
                ...state,
                events: [...state.events].concat(JSON.parse(localStorage.getItem('events')))
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