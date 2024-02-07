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
import CadastrarUsuario from "Paginas/CadastrarUsuario";
import CadastrarLocal from "Paginas/CadastrarLocal";
import Cadastros from "Paginas/PaginaDeCadastros";
import CadastrarAtividade from "Paginas/CadastrarAtividade";
import CadastrarInstituicao from "Paginas/CadastrarInstituicao";
import InscricaoEmAtividade from "Paginas/InscricaoEmAtividade";
import InscricaoEmEvento from "Paginas/InscricaoEmEvento";

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
        </Route>
        <Route path="/cadastro" element={<PaginaPadrao />}>
          <Route index element={<Cadastros />} />
          <Route path="cadastro_atividade" element={<CadastrarAtividade />} />
          <Route path="cadastro_evento" element={<CadastrarEventos />} />
          <Route path="cadastro_instituicao" element={<CadastrarInstituicao />} />
          <Route path="cadastro_local" element={<CadastrarLocal />} />
          <Route path="cadastro_usuario" element={<CadastrarUsuario />} />
        </Route>
          <Route path="/inscricao" element={<PaginaPadrao />}>
          <Route index element={<Cadastros />} />
          <Route path="inscricao_atividade" element={<InscricaoEmAtividade/>} />
          <Route path="inscricao_evento" element={<InscricaoEmEvento />} />
          
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
