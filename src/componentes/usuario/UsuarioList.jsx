import React, { useState, useEffect } from 'react'
import UsuarioService from './UsuarioService'

const UsuarioList = () => {
  const [listaUsuarios, setListaUsuarios] = useState([])

  const usuarioService = UsuarioService()

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuarios = await usuarioService.listarUsuarios()
        setListaUsuarios(usuarios)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsuarios()
  }, [])

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {listaUsuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsuarioList