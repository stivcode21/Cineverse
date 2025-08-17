import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import InfoMovie from "../pages/InfoMovie";
import InfoSerie from "../pages/InfoSerie";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<InfoMovie />} />
        <Route path="/serie/:id" element={<InfoSerie />} />
      </Routes>
    </BrowserRouter>
  );
}
