import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import { AuthSupplier } from "./context/AuthSupplier";
import { useState } from "react";


export default function App() {

  const [percentage, setPercentage] = useState(100);

  return (

    <BrowserRouter>
      <AuthSupplier>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/cadastro" element={<RegisterPage />}></Route>
          <Route path="/habitos" element={<HabitsPage percentage={percentage} />}></Route>
          <Route path="/hoje" element={<TodayPage percentage={percentage} setPercentage={setPercentage} />}></Route>
          <Route path="/historico" element={<HistoricPage />}></Route>
        </Routes>
      </AuthSupplier>
    </BrowserRouter>

  );
}

