import React from 'react';
import { Button, TextField, Container, Paper, Typography, Box, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRegistrationForm } from '../context/RegistrationFormProvider';

const RegistrationFormUI: React.FC = () => {
  const { step, formData, reasons, photo, errorMessage, photoTaken, isCameraActive, handleBack, handleNext, handleSubmit, handleChange, handleReasonsChange, handleTakePhoto, startCamera, stopCamera } = useRegistrationForm();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Grid container spacing={2}>
          {/* Resto de la interfaz de usuario según tu código original */}
          {/* ... */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default RegistrationFormUI;
