import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<RegisterPage />}></Route>
        <Route path="/habitos" element={<HabitsPage />}></Route>
        <Route path="/hoje" element={<TodayPage />}></Route>
        <Route path="/historico" element={<HistoricPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

