import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const CheckoutSuccess = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your transaction was successful. You will receive an email confirmation shortly.
        </Typography>
        <br />
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Transaction Details
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Serial No. - 12345
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To - Toronto
          </Typography>
          <Typography variant="body1" color="text.secondary">
            From - New York
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Date - 26/05/2024
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Price - $88
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Box>
    </Container>
  );
};
