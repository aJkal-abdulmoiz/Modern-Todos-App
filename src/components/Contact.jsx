import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon } from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const mailtoLink = `mailto:abdulmoiz833.dev@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };


  const contactDetails = [
    { icon: <EmailIcon />, title: 'Email', info: 'abdulmoiz8333.dev@gmail.com' },
    { icon: <PhoneIcon />, title: 'Phone', info: '+92 (334) 853-7793' },
    { icon: <LocationIcon />, title: 'Address', info: 'Pakistan, Islamabad' }
  ];

  return (
    <Box
      sx={{
        background: '#222',
        color: 'white', 
        maxHeight: '100%',
        py: 6
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: '#bfbfbf' }}>
          Have questions or need help? Reach out to Me using the form below or via my contact details.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={6}
              sx={{ backgroundColor: '#252a2f', p: 3, borderRadius: 2 }}
            >
              {contactDetails.map((detail, index) => (
                <Box key={index} display="flex" alignItems="center" mb={2}>
                  <Box sx={{ mr: 2, color: '#00FA9A' }}>{detail.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {detail.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      {detail.info}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: '#252a2f' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    backgroundColor: '#252a2f',
                    marginBottom: 3,
                    borderRadius: 2,
                    color: "#fff",
                    '& .MuiInputBase-input': {
                      color: '#fff', 
                    },
                    '& .MuiInputLabel-root': {
                      color: '#fff', 
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#fff', 
                    },
                    '& .MuiOutlinedInput-root': {
                      borderColor: '#4b8e7f', 
                      '&:hover fieldset': {
                        borderColor: '#57a392', 
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4b8e7f', 
                      },
                      '.css-1ll44ll-MuiOutlinedInput-notchedOutline': {
                        color: '#cfcfcf'
                      }
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    backgroundColor: '#252a2f',
                    marginBottom: 3,
                    borderRadius: 2,
                    color: "#fff",
                    '& .MuiInputBase-input': {
                      color: '#fff', 
                    },
                    '& .MuiInputLabel-root': {
                      color: '#fff', 
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#fff', 
                    },
                    '& .MuiOutlinedInput-root': {
                      borderColor: '#4b8e7f', 
                      '&:hover fieldset': {
                        borderColor: '#57a392', 
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4b8e7f', 
                      },
                      '.css-1ll44ll-MuiOutlinedInput-notchedOutline': {
                        color: '#cfcfcf'
                      }
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{
                    backgroundColor: '#252a2f',
                    marginBottom: 3,
                    borderRadius: 2,
                    color: "#fff",
                    '& .MuiInputBase-input': {
                      color: '#fff', 
                    },
                    '& .MuiInputLabel-root': {
                      color: '#fff', 
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#fff', 
                    },
                    '& .MuiOutlinedInput-root': {
                      borderColor: '#4b8e7f', 
                      '&:hover fieldset': {
                        borderColor: '#57a392', 
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4b8e7f', 
                      },
                      '.css-1ll44ll-MuiOutlinedInput-notchedOutline': {
                        color: '#cfcfcf'
                      }
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#4b8e7f',
                    '&:hover': { backgroundColor: '#57a392' },
                    color: '#f2f2f2',
                    fontWeight: 'bold'
                  }}
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
