import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './css/style.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function TodoBox({ inpVal, sign, amountVal, onClick }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12}><Item>
                    <IconButton aria-label="delete" size="small" onClick={onClick} ><DeleteIcon color="secondary" /></IconButton>
                    {inpVal}<span className="amount_Val">{sign}{amountVal}</span></Item><br />
                </Grid>
            </Grid>
        </Box>
    );
}



