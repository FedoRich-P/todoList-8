import {TodolistType} from "../App";
import {v1} from "uuid";
import {Simulate} from "react-dom/test-utils";
import playing = Simulate.playing;

type ActionType = {
    type: string;
    payload: any;
    // [key: string]: string;
}

// let todolistID1 = v1()
// let todolistID2 = v1()
//
// let initialState: TodolistType[] = [
//     {id: todolistID1, title: 'What to learn', filter: 'all'},
//     {id: todolistID2, title: 'What to buy', filter: 'all'},
// ]

export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case 'ADD-TODOLIST': {
            return [
                ...state,
                {id: v1(), title: action.payload.title, filter: 'all'}
            ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map((el) => el.id === action.payload.id ?
                {...el, title: action.payload.title} : el
            )
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map((el) => el.id === action.payload.id ?
                {...el, filter: action.payload.filter} : el
            )
        }
        default:
            throw new Error(`Unknown type ...`)
    }
}