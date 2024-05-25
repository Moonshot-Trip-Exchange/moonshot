import React from 'react';
import { TextField, Button } from '@mui/material';

export const SellTicket = () => {
  return (
    <div> 
      <h1>Sell Ticket</h1>
      <form noValidate autoComplete="off" style={{display: 'flex', justify: 'center', flexDirection: "column"}}>
        
        <TextField id="serial-no" label="Serial No." variant="outlined" />
        <TextField id="date" label="Date" type="date" variant="outlined" />
        <TextField id="to" label="To" variant="outlined" />
        <TextField id="from" label="From" variant="outlined" />
        <TextField id="price" label="Price" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};