import React from 'react';
import { Container, Typography, TextField, TextareaAutosize, Button, Grid } from '@mui/material';

function ContactMe() {
  return (
    <Container maxWidth="md" style={{marginTop: '20%'}}>
      <Typography variant="h2" gutterBottom>
        Contact <span>Me!</span>
      </Typography>

      <form action="https://formsubmit.co/minjunkimuoft@gmail.com" method="POST">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="full_name"
              label="Full Name (optional)"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="email_address"
              label="Email Address (optional for response)"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="mobile_number"
              label="Mobile Number (optional)"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="email_subject"
              label="Email Subject (required)"
              variant="outlined"
              required
              style={{ backgroundColor: '#fff' }}
            />
          </Grid>
        </Grid>

        <TextareaAutosize
          name="email_content"
          rowsMin={5}
          placeholder="Your Message (required)"
          style={{ width: '100%', marginBottom: '16px', color: '#fff', backgroundColor: '#1f242d'}}
          required
        />

        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
}

export default ContactMe;
