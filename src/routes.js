import SobreMim from "./Paginas/SobreMim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import Login from "Paginas/Login";
import Eventos from "Paginas/Eventos";
import CadastrarEventos from "Paginas/CadastrarEventos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Login />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="login" element={<Login />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="cadastro_evento" element={<CadastrarEventos />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
