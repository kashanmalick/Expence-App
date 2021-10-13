import './css/style.css'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';



function ExpanceTrack() {
  return (
    <div className="first_heading">
      <h1>Expense Tracker <IconButton aria-label="notification" size="larger">
        <NotificationsIcon color="secondary" />
      </IconButton></h1>
    </div>
  )
}

export default ExpanceTrack;



