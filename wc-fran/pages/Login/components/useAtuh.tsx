import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  loginUser: () => void;
  signInUser: () => void; // Corrección del nombre de la función
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const loginUser = () => {
    if (username === 'Robert' && password === '123456') {
      // Redireccionar a /menu
      router.push('/menu');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  const signInUser = () => { // Corrección del nombre de la función
    router.push('/SingIn');
  };

  const value: AuthContextType = {
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    loginUser,
    signInUser, // Corrección del nombre de la función
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

