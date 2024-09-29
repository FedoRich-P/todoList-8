import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent} from "react";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, Grid2, List, ListItem} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';

type PropsType = {
    title: string
    todolistId: string
    tasks: TaskType[]
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    updateTask: (todolistId: string, taskId: string, title: string) => void
    updateTodolist: (todolistId: string, title: string) => void
}

export const Todolist = (props: PropsType) => {
    const {
        title,
        tasks,
        filter,
        removeTask,
        changeFilter,
        addTask,
        changeTaskStatus,
        todolistId,
        removeTodolist,
        updateTask,
        updateTodolist
    } = props

    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        changeFilter(filter, props.todolistId)
    }

    const removeTodolistHandler = () => {
        removeTodolist(todolistId)
    }

    const addTaskCallback = (title: string) => {
        addTask(title, props.todolistId)
    }

    const updateTodolistHandler = (title: string) => {
        updateTodolist(props.todolistId, title)
    }

    // "homepage": "https://FedoRich-P.github.io/newTodoList",

    return (

        <Grid2>
            <Grid2 container justifyContent={'space-between'} alignItems={'center'} marginBottom={'20px'}>
                <EditableSpan value={title} onChange={updateTodolistHandler}/>
                <Button
                    variant={'contained'}
                    color={'error'}
                    onClick={removeTodolistHandler}>
                    Delete
                </Button>
            </Grid2>
            <AddItemForm addItem={addTaskCallback}/>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <List>
                        {tasks.map((task) => {

                            const removeTaskHandler = () => {
                                removeTask(task.id, todolistId)
                            }

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = e.currentTarget.checked
                                changeTaskStatus(task.id, newStatusValue, todolistId)
                            }

                            const changeTaskTitleHandler = (title: string) => {
                                updateTask(todolistId, task.id, title)
                            }

                            return <ListItem key={task.id} className={task.isDone ? 'is-done' : ''}>
                                <Grid2
                                    container justifyContent={'space-between'}
                                    alignItems={'center'}
                                    width={'100%'}
                                >
                                    <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                                    <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
                                    <Button
                                        variant={'contained'}
                                        color={'error'}
                                        onClick={removeTaskHandler}>
                                        Delete
                                    </Button>
                                </Grid2>
                            </ListItem>
                        })}
                    </List>
            }
            <Grid2 container justifyContent={'space-between'}>
                <Button
                    // className={filter === 'all' ? 'active-filter' : ''}
                    variant={'contained'}
                    color={'success'}
                    onClick={() => changeFilterTasksHandler('all')}>
                    All</Button>
                <Button
                    // className={filter === 'active' ? 'active-filter' : ''}
                    variant={'contained'}
                    color={'success'}
                    onClick={() => changeFilterTasksHandler('active')}>
                    Active</Button>
                <Button
                    // className={filter === 'completed' ? 'active-filter' : ''}
                    variant={'contained'}
                    color={'success'}
                    onClick={() => changeFilterTasksHandler('completed')}>
                    Completed</Button>
            </Grid2>
        </Grid2>
    )
}
