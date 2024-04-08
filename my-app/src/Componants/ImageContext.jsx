import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState("");

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
