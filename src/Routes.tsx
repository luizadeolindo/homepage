import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { VerifyAuth } from "./components/VerifyAuth";
import { CadastroPage } from "./pages/CadastroPage";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RecuperarSenhaPage } from "./pages/RecuperarSenhaPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/cadastro" element={<CadastroPage />}></Route>
      <Route path="/recuperar-senha" element={<RecuperarSenhaPage />}></Route>
      <Route element={<Layout />}>
        <Route element={<VerifyAuth />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
