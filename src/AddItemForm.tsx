import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, Grid2, TextField} from "@mui/material";


type PropsType = {
	addItem: (title:string) => void
}

export const AddItemForm = ({addItem}: PropsType) => {

	const [title, setTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const addItemHandler = () => {
		if (title.trim() !== '') {
			addItem(title.trim())
			setTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addItemHandler()
		}
	}
	return (
		<Grid2 marginBottom={'20px'}>
			<TextField
				size={'small'}
				className={error ? 'error' : ''}
				value={title}
				onChange={changeItemHandler}
				onKeyUp={addItemOnKeyUpHandler}
				style={{marginRight: 15}}
				label={error}
				helperText={error}
				error={error ? !0 : !1}
			/>
			<Button variant={'contained'} onClick={addItemHandler}>Add</Button>
		</Grid2>
	)
}


