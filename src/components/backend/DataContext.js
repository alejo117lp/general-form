import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import useAxiosRequest from './useAxiosRequest';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { responseData, error, loading, sendRequest } = useAxiosRequest();
  const [userData, setUserData] = useState(() => {
    // Intenta leer los datos almacenados en localStorage al cargar la aplicación
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
  const user = '4040404040';

  useEffect(() => {
    if (!userData) {
      // Solo realiza la solicitud si no hay datos de usuario ya cargados desde localStorage
      sendRequest({
        url: `http://localhost:3001/api/empleados/${user}`,
        method: 'GET',
      });
    }
  }, [sendRequest, user, userData]);

  useEffect(() => {
    // Actualiza localStorage y el estado de userData cuando responseData cambia y no es null
    if (responseData) {
      localStorage.setItem('userData', JSON.stringify(responseData));
      setUserData(responseData);
    }
  }, [responseData]);

  // Función para permitir a los componentes solicitar la recarga de userData desde el servidor
  const refreshUserData = useCallback(async () => {
    await sendRequest({
      url: `http://localhost:3001/api/empleados/${user}`,
      method: 'GET',
    });
  }, [sendRequest, user]); 

  return (
    <DataContext.Provider value={{ userData, error, loading, refreshUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
