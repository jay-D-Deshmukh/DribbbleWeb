import React from "react";
import { ImageProvider } from "./Componants/ImageContext"
import Signup from "./Componants/Signup";
import Login from "./Componants/Login";
import Home from "./Componants/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProfile from "./Componants/Profile/CreateProfile";

function App() {
  return (
    <><ImageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<CreateProfile />} />
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      </ImageProvider>
    </>
  );
}

export default App;
