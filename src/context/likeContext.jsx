// Crear un contexto que añada el parque al que se ha dado like y permita actualizar la lista de parques
import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likedParks, setLikedParks] = useState([]);

    const addLike = (parque) => {
        setLikedParks((prev) => [...prev, parque]);
    };

    return (
        <LikeContext.Provider value={{ likedParks, addLike }}>
            {children}
        </LikeContext.Provider>
    );
};
