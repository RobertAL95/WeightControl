// RegisterButton.tsx
import React from 'react';
import { useAuth } from './useAuth';
import Button from '@material-ui/core/Button';

const RegisterButton: React.FC = () => {
  const handleRegister = () => {
    // Lógica para redireccionar a la página de registro
    // Puedes implementar esta parte según tus necesidades
  };

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      color="secondary" // Color morado
      onClick={handleRegister}
    >
      Registrarse
    </Button>
  );
};

export default RegisterButton;
