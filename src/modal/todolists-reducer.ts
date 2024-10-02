import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";
import {
    addTodoListType,
    changeTodoListFilterType,
    changeTodoListTitleType,
    removeTodoListType
} from "./todolists-reducer.test";

export type RemoveTodolistActionType = {
    type: 'REMOVE_TODOLIST'
    payload: {
        id: string
    }
}

export type AddTodolistActionType = {
    type: 'ADD_TODOLIST'
    payload: {
        title: string
    }
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE_TODOLIST_TITLE'
    payload: {
        id: string
        title: string
    }
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE_TODOLIST_FILTER'
    payload: {
        id: string
        filter: FilterValuesType
    }
}

type ActionsType =
    | RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
]

export const todoListsReducer = (state: TodolistType[] = initialState, action: ActionsType) => {

    switch (action.type) {
        case removeTodoListType: {
            const {id} = action.payload
            return state.filter(el => el.id !== id)
        }
        case addTodoListType: {
            const {title} = action.payload
            return [...state, {id: v1(), title, filter: "all"}]
        }
        case changeTodoListTitleType: {
            const {id, title} = action.payload
            return state.map(el => el.id === id ? {...el, title} : el)
        }
        case changeTodoListFilterType: {
            const {id, filter} = action.payload
            return state.map(el => el.id === id ? {...el, filter} : el)
        }
        default:
            return state
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {
        type: removeTodoListType,
        payload: {
            id: todolistId
        }
    } as const
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {
        type: addTodoListType,
        payload: {
            title
        }
    } as const
}

export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {
        type: changeTodoListTitleType,
        payload: {
            id,
            title,
        }
    } as const
}

export const changeTodoListFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {
        type: changeTodoListFilterType,
        payload: {
            id,
            filter,
        }
    } as const
}