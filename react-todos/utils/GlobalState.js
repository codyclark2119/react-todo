import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: action.post
            };

        case ADD_EVENT:
            return {
                ...state,
                events: [action.post, ...state.events]
            };

        case REMOVE_EVENT:
            return {
                ...state,
                events: state.events.filter((event) => {
                    return event._id !== action._id;
                })
            };

        case SAVE_EVENTS:
            localStorage.setItem('events', JSON.stringify(state.events))
            return {
                ...state
            };

        case ADD_REOCCURING:
            return {
                ...state,
                reoccuring: [action.post, ...state.reoccuring]
            };

        case SAVE_REOCCURING:
            localStorage.setItem('reoccuring', JSON.stringify(state.reoccuring))
            return {
                ...state
            };

        case REMOVE_REOCCURING:
            return {
                ...state,
                reoccuring: state.reoccuring.filter((event) => {
                    return event._id !== action._id;
                })
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