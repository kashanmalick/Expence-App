import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './css/style.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function RowAndColumnSpacing(props) {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0.5 }}>
                <Grid item xs={6}>
                    <Item>INCOME<p className="blueviolet">{props.sign}<span>{props.posativeValue}</span></p></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>EXPENSE<p className="red">{props.sign}<span>{props.minusValue}</span></p></Item>
                </Grid>
            </Grid>
        </Box>
    );
}


export default RowAndColumnSpacing;