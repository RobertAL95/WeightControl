import React from 'react';
import { useAuth } from './useAtuh';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Image from 'next/image';

// Importa la imagen de fondo
import backgroundImage from '../../../public/images/Tosca and Pink Abstract Watercolor Flower Phone Wallpaper.png';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    maxWidth: '400px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2), // Bordes redondeados
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`, // Asigna la imagen de fondo
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir el contenedor
    backgroundPosition: 'center', // Centra la imagen en el contenedor
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  socialButton: {
    width: '100%',
    margin: theme.spacing(1, 0),
    transition: 'background-color 0.3s ease-in-out', // Transición al pasar el mouse
    '&:hover': {
      backgroundColor: 'violet', // Cambio de color al pasar el mouse
    },
  },
  registerButton: {
    marginTop: theme.spacing(1),
    backgroundColor: 'violet',
    color: 'white',
    '&:hover': {
      backgroundColor: 'purple',
    },
  },
  fancyTypography: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'tomato',
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm: React.FC = () => {
  const classes = useStyles();
  const { username, setUsername, password, setPassword, error, loginUser, signInUser} = useAuth();

  const handleLogin = () => {
    loginUser();
  };

  const handleRegister = () => {
    signInUser();
  };

  return (
    <Container 
    component="main" 
    style={{ minHeight: '100vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundImage: `url(${backgroundImage.src})`, // Aquí deberías usar .src para obtener la URL de la imagen
              backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir el contenedor
              backgroundPosition: 'center', // Centra la imagen en el contenedor
     }}>
      <div className={classes.formContainer}>
        <Typography component="h1" variant="h5" align="center" className={classes.fancyTypography}>
          Iniciar sesión
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form noValidate style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttonContainer}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleRegister}
              className={classes.registerButton} // Aplicamos la clase al botón de registro
            >
              Registrar
            </Button>
          </div>
          <div className={classes.socialButtonContainer}>
            <Button
              startIcon={<InstagramIcon />}
              variant="contained"
              color="primary"
              className={classes.socialButton}
            >
            </Button>
            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              color="primary"
              className={classes.socialButton}
            >
            </Button>
            <Button
              startIcon={<GoogleIcon />}
              variant="contained"
              color="primary"
              className={classes.socialButton}
            >
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
