import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';

const SellTicket = () => {
  return (
    <div> 
      <h1>Sell Ticket</h1>
      <form noValidate autoComplete="off">
        <TextField id="serial-no" label="Serial No." variant="outlined" />
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
      </form>
    </div>
  );
};

export default SellTicket;