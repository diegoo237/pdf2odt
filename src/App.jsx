import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import ConvertPage from "./pages/ConvertPage";

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<ConvertPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
