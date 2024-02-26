import { useParams } from 'react-router-dom';
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
import Inscricoes from "Paginas/PaginaDeInscricoes";
import Listagens from "Paginas/PaginaDeListagens";
import ListarAtividade from "Paginas/ListarAtividade";
import ListarEvento from "Paginas/ListarEvento";
import ListarUsuario from "Paginas/ListarUsuario";
import ListarInstituicao from "Paginas/ListarInstituicao";
import ListarLocal from "Paginas/ListarLocal";
import EditarAtividade from "Paginas/EditarAtividade";
import EditarEvento from 'Paginas/EditarEventos';
import EditarInstituicao from 'Paginas/EditarInstituicao';
import EditarLocal from 'Paginas/EditarLocal';
import EditarUsuario from 'Paginas/EditarUsuario';
import CriarConta from 'Paginas/CriarConta';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Login />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="login" element={<Login />} />
        </Route>

          <Route path="/eventos" element={<PaginaPadrao />}>
            <Route index element={<Eventos />} />
            <Route path=":id" element={<EditarEvento />} />    
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
          <Route index element={<Inscricoes />} />
          <Route path="inscricao_atividade" element={<InscricaoEmAtividade/>} />
          <Route path="inscricao_evento" element={<InscricaoEmEvento />} />
        </Route>

        <Route path="/listar" element={<PaginaPadrao />}>
          <Route index element={<Listagens />} />
          <Route path="listar_atividades" element={<ListarAtividade />} />
          <Route path="listar_eventos" element={<ListarEvento />} />
          <Route path="listar_instituicoes" element={<ListarInstituicao />} />
          <Route path="listar_locais" element={<ListarLocal />} />
          <Route path="listar_usuarios" element={<ListarUsuario />} />
          
        </Route>

        <Route path="/editar" element={<PaginaPadrao />}>
          <Route index element={<Listagens />} />
          <Route path="editar_atividade/:id" element={<EditarAtividade />} />
          <Route path="editar_evento/:id" element={<EditarEvento />} />
          <Route path="editar_instituicao/:id" element={<EditarInstituicao />} />
          <Route path="editar_local/:id" element={<EditarLocal />} />
          <Route path="editar_usuario/:id" element={<EditarUsuario />} />
          
        </Route>
        
        <Route path="*" element={<NaoEncontrada />} />
        <Route path='/criar_conta' element={<CriarConta />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
