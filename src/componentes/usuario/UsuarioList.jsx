import { useState, useEffect } from 'react'
import usuarioService from './UsuarioService'
import './UsuarioList.css'

const UsuarioList = ({ usuarios }) => {
  const [listaUsuarios, setListaUsuarios] = useState([])

  useEffect(() => {
    setListaUsuarios(usuarios)
  }, [usuarios])

  return (
    <div className="usuarios-container">
      <h2>Lista de Usuários</h2>
      <ul className="usuarios-lista">
        {listaUsuarios
          .slice()
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((usuario) => (
            <li key={usuario.id} className="usuario-item">{usuario.nome} - {usuario.username}
              <div className="usuario-acoes">
                <button className="btn-editar">
                  Editar
                </button>

                <button className="btn-excluir">
                  Excluir
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default UsuarioList
