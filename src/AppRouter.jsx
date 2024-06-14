import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";



function AppRouter() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter;
