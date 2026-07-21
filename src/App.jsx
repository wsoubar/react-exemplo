import { useEffect, useState } from 'react'
import './App.css'
import UsuarioList from './componentes/usuario/UsuarioList'
import UsuarioForm from './componentes/usuario/UsuarioForm'
import usuarioService from './componentes/usuario/UsuarioService';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const carregarUsuarios = async () => {
      const lista = await usuarioService.listarUsuarios();

      setUsuarios(lista);
    };

    carregarUsuarios();
  }, []);
  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <UsuarioForm onSalvar={(novoUsuario) => {
        setUsuarios([...usuarios, novoUsuario]);
      }} />
      <UsuarioList usuarios={usuarios} />
    </>
  )
}

export default App
