export type StateType = {
    age: number;
    childrenCount: number;
    name: string;
}

type ActionType = {
    type: string;
    // value: string;
    [key: string]: string;
}

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            return {
                ...state,
                age: state.age + 1,
            }
        case 'INCREMENT-CHILDREN-COUNTER':
            return {
                ...state,
                childrenCount: state.childrenCount + 1,
            }
        case 'CHANGE-NAME':
            return {
                ...state,
                name: action.newName,
            }
        default:
            throw new Error(`Unknown type ...`)
    }
}