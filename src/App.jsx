import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNav from "./components/AppNav";
import HomePage from "./pages/HomePage";
import ConvertPage from "./pages/ConvertPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
