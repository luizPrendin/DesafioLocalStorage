import React, { createContext, useContext, useState } from 'react';

const CarrosContext = createContext(null);

export function CarrosProvider({ children }) {
  const [carros, setCarros] = useState([]);

  return (
    <CarrosContext.Provider value={{ carros, setCarros }}>
      {children}
    </CarrosContext.Provider>
  );
}

export function useCarros() {
  return useContext(CarrosContext);
}