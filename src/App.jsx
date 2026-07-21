import { useEffect, useState } from "react";
import "./App.css";
import UsuarioList from "./componentes/usuario/UsuarioList";
import UsuarioForm from "./componentes/usuario/UsuarioForm";
import usuarioService from "./componentes/usuario/UsuarioService";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEmEdicao, setUsuarioEmEdicao] = useState(null);

  useEffect(() => {
    const carregarUsuarios = async () => {
      const lista = await usuarioService.listarUsuarios();

      setUsuarios(lista);
    };

    carregarUsuarios();
  }, []);

  const handleSalvar = (usuarioSalvo) => {
    if (usuarioEmEdicao) {
      setUsuarios((prev) =>
        prev.map((usuario) =>
          usuario.id === usuarioSalvo.id ? usuarioSalvo : usuario,
        ),
      );
      setUsuarioEmEdicao(null);
    } else {
      setUsuarios((prev) => [...prev, usuarioSalvo]);
    }
  };

  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <UsuarioForm onSalvar={handleSalvar} usuario={usuarioEmEdicao} />
      <UsuarioList usuarios={usuarios} onEditar={setUsuarioEmEdicao} />
    </>
  );
}

export default App;
