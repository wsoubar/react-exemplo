import { useEffect, useState, useRef } from "react";
import usuarioService from "./UsuarioService";
import "./UsuarioForm.css";

const UsuarioForm = ({ onSalvar, usuario }) => {
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    password: "",
    email: "",
  });

  const dialogRef = useRef();

  useEffect(() => {
    if (usuario) {
      setFormData({
        nome: usuario.nome || "",
        username: usuario.username || "",
        password: usuario.password || "",
        email: usuario.email || "",
      });
    } else {
      setFormData({
        nome: "",
        username: "",
        password: "",
        email: "",
      });
    }
  }, [usuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoUsuario = usuario
      ? await usuarioService.atualizarUsuario(usuario.id, formData)
      : await usuarioService.criarUsuario(formData);

    if (onSalvar) {
      onSalvar(novoUsuario);
      dialogRef.current.showModal();
    }

    setFormData({
      nome: "",
      username: "",
      password: "",
      email: "",
    });
  };

  return (
    <div className="usuario-form-container">
      <h2>{usuario ? "Editar Usuário" : "Cadastro de Usuário"}</h2>

      <form onSubmit={handleSubmit} className="usuario-form">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
      <dialog ref={dialogRef}>
        <h3>Informação</h3>
        <p>Usuário cadastrado com sucesso!</p>

        <button
          className="btn-cancelar-modal"
          onClick={() => dialogRef.current.close()}
        >
          Sair
        </button>
      </dialog>
    </div>
  );
};

export default UsuarioForm;
