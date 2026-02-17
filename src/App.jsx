import React from "react";
import { Outlet } from 'react-router'
import { Header } from "./components/ui/Header/Header.jsx";
import { Footer } from "./components/ui/Footer/Footer";


const App = () => {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default App;
