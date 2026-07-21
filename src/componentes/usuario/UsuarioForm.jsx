import { useState } from 'react';
import usuarioService from './UsuarioService';
import './UsuarioForm.css';

const UsuarioForm = ({ onSalvar }) => {


  const [usuario, setUsuario] = useState({
    nome: '',
    username: '',
    password: '',
    email: ''
  });

  // // chama a inclusão de usuario no backend
  // const criarUsuario = async (usuario) => {
  //   try {
  //     const novoUsuario = await usuarioService.criarUsuario(usuario);
  //     return novoUsuario;
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     throw error;
  //   }

  //   usuarioService.listarUsuarios();

  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsuario((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoUsuario = await usuarioService.criarUsuario(usuario);

    if (onSalvar) {
      onSalvar(novoUsuario);
    }

    setUsuario({
      nome: '',
      username: '',
      password: '',
      email: ''
    });
  };

  return (
    <div className="usuario-form-container">
      <h2>Cadastro de Usuário</h2>

      <form onSubmit={handleSubmit} className="usuario-form">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={usuario.nome}
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
            value={usuario.username}
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
            value={usuario.email}
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
            value={usuario.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default UsuarioForm;