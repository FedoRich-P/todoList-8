import {TodolistType} from "../App";
import {v1} from "uuid";
import {todolistsReducer} from "./todolists-reducer";

test('correct todolist should be removed', () => {

    let todolistID1 = v1()
    let todolistID2 = v1()

    let startState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const endState = todolistsReducer(startState, {type: 'REMOVE-TODOLIST', payload: {id: todolistID1} })

    expect(endState.length).toEqual(1);
    expect(endState[0].title).toEqual('What to buy');
    expect(endState[0].id).toBe(todolistID2)
})

test('correct todolist add Todo', () => {

    let todolistID1 = v1()
    let todolistID2 = v1()
    // let todolistID3 = v1()

    let startState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const endState = todolistsReducer(startState, {type: 'ADD-TODOLIST', payload: {title: 'Hi'} })

    expect(endState.length).toEqual(3);
    expect(endState[2].title).toBe('Hi')
    expect(endState[2].filter).toBe('all')
})

test('correct todolist should change its name', () => {

    let todolistID1 = v1()
    let todolistID2 = v1()

    const newTodoListTitle = 'New TodoList Title'

    let startState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const endState = todolistsReducer(startState, {type: 'CHANGE-TODOLIST-TITLE', payload: {title: newTodoListTitle, id:todolistID2} })

    expect(endState.length).toEqual(2);
    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(newTodoListTitle)
    expect(endState[1].filter).toBe('all')
})

test('correct todolist should change its filter', () => {

    let todolistID1 = v1()
    let todolistID2 = v1()


    let startState: TodolistType[] = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]

    const endState = todolistsReducer(startState, {type: 'CHANGE-TODOLIST-FILTER', payload: {filter: "active", id:todolistID1} })
    const endState2 = todolistsReducer(startState, {type: 'CHANGE-TODOLIST-FILTER', payload: {filter: 'completed', id:todolistID2} })

    expect(endState[0].filter).toBe('active')
    expect(endState2[1].filter).toBe('completed')
})