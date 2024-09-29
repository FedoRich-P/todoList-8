import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

type MenuButtonProps = {
    background?: string;
}

export const MenuButton = styled(Button)<MenuButtonProps>(({background, theme}) =>({
    minWidth: '110px',
    fontWeight: 'bold',
    boxShadow: '0 0 2px 2px #054B62',
    borderRadius: '4px',
    textTransform: 'capitalize',
    margin: '0 10px',
    padding: '8px 24px',
    color: '#fff',
    background: background || theme.palette.primary.light,
}))