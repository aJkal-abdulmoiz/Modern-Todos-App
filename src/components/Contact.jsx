import React from 'react';
import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ marginTop: 4 , color: "white"}}>
      <Typography variant="h4">Contact Information</Typography>
      <Typography variant="h6">Email: your-email@example.com</Typography>
      <Typography variant="h6">Phone: +1234567890</Typography>
    </Container>
  );
}

export default Contact;
