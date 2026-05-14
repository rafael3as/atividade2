import { useState } from 'react'
import './Cadastro.css'
import Vava from './assets/imgv.png'

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='foto'><img src={Vava} alt="" /></section>
      <section className='login'>

      <h1>VALORANT</h1>

      <div className='caixa'>

      <div className='conta'>
      <p>Nome de Usuário</p>
      <input type="text" placeholder='Nome de Usuário'/>
      </div>

      <div className='conta'>
      <p>Email</p>
      <input type="text" placeholder='Email'/>
      </div>

      <div className='conta'>
      <p>Senha</p>
      <input type="password" placeholder='Senha'/>
      </div>

      <div className='conta'>
      <p>Confirmar Senha</p>
      <input type="password" placeholder='Confirmar Senha'/>
      </div>

      <button>Cadastrar</button>
      <p>Já tem conta? <a href="http://">Entrar</a></p>
      </div>

      </section>
    </>
  )
}

export default Cadastro