
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CheckoutFailed = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
            Oops Something went wrong.
        </Typography>
        <Typography variant="body1" color="text.secondary">
            We're sorry, but we encountered an error processing your request. Please try again later or contact us for assistance.
        </Typography>
      </Box>
    </Container>
  );
};
