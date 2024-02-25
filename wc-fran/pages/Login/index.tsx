// pages/Login/index.tsx
import React from 'react';
import LoginForm from './components/LoginForm'; 
import RegisterButton from './components/RegisterButton'; 
import { AuthProvider } from './components/useAtuh'; 

const LoginPage: React.FC = () => {
  return (
    <AuthProvider>
      <LoginForm />
      <RegisterButton />
    </AuthProvider>
  );
};

export default LoginPage;
