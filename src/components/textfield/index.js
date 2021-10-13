import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ColorTextFields({title,num,onChange}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={title} type={num} onChange={onChange} color="secondary" />
    </Box>
  );
}


export default ColorTextFields;
