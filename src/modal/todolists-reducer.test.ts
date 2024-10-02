import {
    addTodolistAC,
    changeTodoListFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todoListsReducer
} from './todolists-reducer'
import {v1} from 'uuid'
import {TodolistType} from '../App'

let todolistId1 = v1()
let todolistId2 = v1()

const startState: TodolistType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
]

export const removeTodoListType = 'REMOVE_TODOLIST'
export const addTodoListType = 'ADD_TODOLIST'
export const changeTodoListTitleType = 'CHANGE_TODOLIST_TITLE'
export const changeTodoListFilterType = 'CHANGE_TODOLIST_FILTER'

test('correct todolist should be removed', () => {
    // const action = {
    //     type: removeTodoListType,
    //     payload: {
    //         id: todolistId1,
    //     },
    // } as const
    const endState = todoListsReducer(startState, removeTodolistAC(todolistId1))
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})
test('correct todolist should be added', () => {
    // const action = {
    //     type: addTodoListType,
    //     payload: {
    //         title: 'New Todolist',
    //     },
    // } as const
    const endState = todoListsReducer(startState, addTodolistAC('New Todolist'))
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(addTodolistAC('New Todolist').payload.title)
})
test('correct todolist should change its name', () => {
    // const action = {
    //     type: changeTodoListTitleType,
    //     payload: {
    //         id: todolistId2,
    //         title: 'New Todolist',
    //     },
    // }as const
    const action = changeTodolistTitleAC(todolistId2, 'New Todolist')
    const endState = todoListsReducer(startState, action)

    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(action.payload.title)
})
test('correct filter of todolist should be changed', () => {
    // const action = {
    //     type: changeTodoListFilterType,
    //     payload: {
    //         id: todolistId2,
    //         filter: 'completed',
    //     },
    // } as const
    const action = changeTodoListFilterAC(todolistId2, 'completed')
    const endState = todoListsReducer(startState, action)
    expect(endState[0].filter).toBe('all')
    expect(endState[1].filter).toBe(action.payload.filter)
})

// 1. Стартовый state
// 2. Действие
// 3. Проверяем, что наши действия (изменения state) соответствуют ожиданию