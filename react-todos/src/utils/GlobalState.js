import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_EVENT,
    ADD_EVENT,
    REMOVE_EVENT,
    GET_EVENTS,
    EDIT_EVENT,
    START_EVENT,
    END_EVENT,
    SAVE_EVENT,
    REMOVE_COMPLETE,
    GET_COMPLETE
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
                newCurr = filterOne(state.complete, action._id);
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
            editStart.startTime = action.startTime;
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
            editTime.endTime = action.endTime;
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
            localStorage.removeItem("complete");
            localStorage.removeItem("events")
            let newFav = filterOne(state.events, action._id)
            save([newFav, ...state.complete], 'complete')
            save(filterList(state.events, newFav._id), 'events')
            return {
                ...state,
                events: filterList(state.events, newFav._id),
                complete: [newFav, ...state.complete]
            };

        case REMOVE_COMPLETE:
            localStorage.removeItem("complete");
            save(filterList(state.complete, action._id), 'complete')
            return {
                ...state,
                complete: filterList(state.complete, action._id)
            };

        case GET_COMPLETE:
            let completeList = JSON.parse(localStorage.getItem('complete'));
            if(completeList !== null){
                completeList = filterList(completeList, null)
            }
            else { completeList = [] }
            save(completeList, "complete");
            return {
                ...state,
                complete: [].concat(completeList)
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
        complete: []
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };