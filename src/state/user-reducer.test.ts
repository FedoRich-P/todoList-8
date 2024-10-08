import {StateType, userReducer} from "./user-reducer";

test('user reducer should increment only age', ()=>{
    const startState: StateType  = {age: 20, childrenCount: 2, name: 'Dimych'};

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'});

    expect(endState.name).toEqual('Dimych');
    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
})

test('user reducer should increment only childrenCount', ()=>{
    const startState: StateType = {age: 20, childrenCount: 2, name: 'Dimych'};

    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNTER'});

    expect(endState.name).toEqual('Dimych');
    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3);
})

test('user reducer should change name of user', ()=>{
    const startState: StateType = {age: 20, childrenCount: 2, name: 'Dimych'};

    const newName = 'Viktor'

    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName:  newName});

    expect(endState.name).toEqual(newName);
    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(2);
})