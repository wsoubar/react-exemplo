import { useState } from 'react'
import './App.css'
import UsuarioList from './componentes/usuario/UsuarioList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <UsuarioList />
    </>
  )
}

export default App
