import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";
import { useSettingsContext } from "./hooks/useSettingsContext";


function AppRouter() {

  const { globalSettings } = useSettingsContext();

  return (
    <BrowserRouter>
      <GlobalStyle $colorSettings={globalSettings} />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter;
