import React, { useState, useRef } from 'react';
import {
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function RegistrationForm() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState<number>(1);
  const [reasons, setReasons] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream>();

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.surname || !formData.email)) {
      setErrorMessage('Llena los campos obligatorios!');
    } else if (step === 2 && reasons.trim() === '') {
      setErrorMessage('Llena los campos obligatorios!');
    } else if (step === 3 && !photo) {
      setErrorMessage('Toma una foto para continuar!');
    } else {
      setErrorMessage('');
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Aquí puedes enviar el formulario con los datos recolectados
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReasonsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReasons(e.target.value);
  };

  const handleTakePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL('image/png');
        setPhoto(imageDataURL);
      }
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      mediaStreamRef.current = mediaStream;
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };

  const stopCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Formulario de Registro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {errorMessage && (
              <Typography variant="body1" color="error" align="center" gutterBottom>
                {errorMessage}
              </Typography>
            )}
            {step === 1 && (
              <div>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="name"
                  onChange={handleChange}
                  value={formData.name || ''}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Apellido"
                  name="surname"
                  onChange={handleChange}
                  value={formData.surname || ''}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  name="email"
                  onChange={handleChange}
                  value={formData.email || ''}
                  margin="normal"
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <TextField
                  fullWidth
                  label="Razones para registrarse"
                  multiline
                  rows={4}
                  value={reasons}
                  onChange={handleReasonsChange}
                  margin="normal"
                />
              </div>
            )}
            {step === 3 && (
              <div>
                <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay></video>
                <IconButton color="primary" onClick={startCamera}>
                  <CameraAltIcon />
                </IconButton>
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              {step > 1 && (
                <Button variant="contained" color="primary" onClick={handleBack} startIcon={<ArrowBackIcon />}>
                  Atrás
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                endIcon={<ArrowForwardIcon />}
                style={{ marginLeft: '10px' }}
              >
                Siguiente
              </Button>
            </Box>
          </Grid>
          {step === 4 && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" gutterBottom>
                ¡Formulario completado!
              </Typography>
              <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                Enviar
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;
