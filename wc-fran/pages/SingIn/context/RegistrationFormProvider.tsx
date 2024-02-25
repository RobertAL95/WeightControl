import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para el estado global
const RegistrationFormContext = createContext<any>(null);

export const RegistrationFormProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [step, setStep] = useState<number>(1);
  const [reasons, setReasons] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [photoTaken, setPhotoTaken] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);

  const contextValue = {
    formData,
    setFormData,
    step,
    setStep,
    reasons,
    setReasons,
    photo,
    setPhoto,
    errorMessage,
    setErrorMessage,
    photoTaken,
    setPhotoTaken,
    isCameraActive,
    setIsCameraActive,
  };

  return (
    <RegistrationFormContext.Provider value={contextValue}>
      {children}
    </RegistrationFormContext.Provider>
  );
};

export const useRegistrationForm = () => {
  const context = useContext(RegistrationFormContext);
  if (!context) {
    throw new Error('useRegistrationForm debe ser utilizado dentro de RegistrationFormProvider');
  }
  return context;
};
