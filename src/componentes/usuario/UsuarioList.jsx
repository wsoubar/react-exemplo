import { useState, useEffect, useRef } from "react";
import usuarioService from "./UsuarioService";
import "./UsuarioList.css";

const UsuarioList = ({ usuarios, onEditar }) => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const dialogRef = useRef();

  useEffect(() => {
    setListaUsuarios(usuarios);
  }, [usuarios]);

  const handleExcluir = async (id) => {
    try {
      console.log("Excluindo usuário com ID:", id);
      await usuarioService.excluirUsuario(id);
      // Atualizar a lista de usuários após a exclusão
      setListaUsuarios(listaUsuarios.filter((usuario) => usuario.id !== id));
      dialogRef.current.close();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="usuarios-container">
      <h2>Lista de Usuários</h2>
      <ul className="usuarios-lista">
        {listaUsuarios
          .slice()
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((usuario) => (
            <li key={usuario.id} className="usuario-item">
              {usuario.nome} - {usuario.username}
              <div className="usuario-acoes">
                <button
                  className="btn-editar"
                  onClick={() => onEditar(usuario)}
                >
                  Editar
                </button>

                <button
                  className="btn-excluir"
                  onClick={() => {
                    setUsuarioSelecionado(usuario);
                    dialogRef.current.showModal();
                  }}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
      </ul>
      <dialog ref={dialogRef}>
        <h3>Confirmar exclusão</h3>
        <p>Deseja realmente excluir {usuarioSelecionado?.nome}?</p>

        <button
          className="btn-excluir"
          onClick={() => handleExcluir(usuarioSelecionado.id)}
        >
          Excluir
        </button>
        <button
          className="btn-cancelar-modal"
          onClick={() => dialogRef.current.close()}
        >
          Cancelar
        </button>
      </dialog>
    </div>
  );
};

export default UsuarioList;
