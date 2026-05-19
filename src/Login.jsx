import { useState } from 'react'
import './Login.css'
import Vava from './assets/imgv.png'

import { Link, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  return (
    <>
      <section className='foto'><img src={Vava} alt="" /></section>
      <section className='login'>

      <h1>VALORANT</h1>

      <div className='caixa'>

      <div className='conta'>
      <p>Email</p>
      <input type="text" placeholder='Email'/>
      </div>

      <div className='conta'>
      <p>Senha</p>
      <input type="passoword" placeholder='Senha'/>
      </div> 

      <button onClick={() => navigate('/listagem')}>
        Entrar
      </button>

      <p>
        Não tem conta? <Link to="/cadastro">Criar</Link>
      </p>

      </div>

      </section>
    </>
  )
}

export default App