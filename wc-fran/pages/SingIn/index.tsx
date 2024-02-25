import React from 'react';
import { RegistrationFormProvider } from './context/RegistrationFormProvider';
import RegistrationFormLogic from './components/RegistrationFormLogic';
import RegistrationFormUI from './components/RegistrationFormUI';

const SingIn: React.FC = () => {
  return (
    <RegistrationFormProvider>
      <RegistrationFormLogic />
      <RegistrationFormUI />
    </RegistrationFormProvider>
  );
};

export default SingIn;
