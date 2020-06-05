import React, { createContext, useReducer, useContext } from "react";
import moment from 'moment';
import {
    SET_CURRENT_EVENT,
    ADD_EVENT,
    REMOVE_EVENT,
    GET_EVENTS,
    EDIT_EVENT,
    START_EVENT,
    END_EVENT,
    SAVE_EVENT,
    REMOVE_SAVED,
    GET_SAVED
} from "./actions"

const StoreContext = createContext();
const { Provider } = StoreContext;

const save = (arr, name) => {
    localStorage.setItem(name, JSON.stringify(arr))
}

const filterList = (arr, id) => {
    let returnArr = arr.filter((event) => {
        return event._id !== id;
    })
    return returnArr;
}

const filterOne = (arr, id) => {
    let item = arr.filter((event) => {
        return (event._id === id);
    })
    return item[0];
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_EVENT:
            let newCurr = filterOne(state.events, action._id);
            if (!newCurr){
                newCurr = filterOne(state.saved, action._id);
            }
            return {
                ...state,
                currentEvent: newCurr
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
            save(filterList(state.events, action._id), 'events')
            return {
                ...state,
                currentEvent: {
                    _id: 0,
                    title: "",
                    startTime: "",
                    duration: ""
                },
                events: filterList(state.events, action._id)
            };

        case EDIT_EVENT: 
            localStorage.removeItem("events");
            let editArr = filterList(state.events, action._id)
            let editPost = filterOne(state.events, action._id);
            editPost.title = action.title;
            editArr = [editPost, ...editArr];
            save(editArr, 'events')
            return {
                ...state,
                currentEvent: editPost,
                events: [...editArr]
            }

        case START_EVENT:
            localStorage.removeItem("events");
            let startArr = filterList(state.events, action._id)
            let editStart = filterOne(state.events, action._id);
            editStart.startTime = moment().format();
            startArr = [editStart, ...startArr];
            save(startArr, 'events')
            return {
                ...state,
                currentEvent: editStart,
                events: [...startArr]
            }

        case END_EVENT:
            localStorage.removeItem("events");
            let endArr = filterList(state.events, action._id)
            let editTime = filterOne(state.events, action._id);
            editTime.endTime = moment().format();
            editTime.duration = moment(editTime.startTime).diff(editTime.endTime, 'minute')
            endArr = [editTime, ...endArr];
            save(endArr, 'events')
            return {
                ...state,
                currentEvent: editTime,
                events: [...endArr]
            }

        case GET_EVENTS:
            let eventList = JSON.parse(localStorage.getItem('events'));
            if(eventList !== null){
                eventList = filterList(eventList, null)
            }
            else { eventList = [] }
            save(eventList, "events");
            return {
                ...state,
                events: [].concat(eventList)
            };

        case SAVE_EVENT:
            localStorage.removeItem("saved");
            localStorage.removeItem("events")
            let newFav = filterOne(state.events, action._id)
            save([newFav, ...state.saved], 'saved')
            save(filterList(state.events, newFav._id), 'events')
            return {
                ...state,
                events: filterList(state.events, newFav._id),
                saved: [newFav, ...state.saved]
            };

        case REMOVE_SAVED:
            localStorage.removeItem("saved");
            save(filterList(state.saved, action._id), 'saved')
            return {
                ...state,
                saved: filterList(state.saved, action._id)
            };

        case GET_SAVED:
            let savedList = JSON.parse(localStorage.getItem('saved'));
            if(savedList !== null){
                savedList = filterList(savedList, null)
            }
            else { savedList = [] }
            save(savedList, "saved");
            return {
                ...state,
                saved: [].concat(savedList)
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
            endTime: "",
            duration: ""
        },
        saved: []
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };