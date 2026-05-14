import { useState } from 'react'
import './Login.css'
import Vava from './assets/imgv.png'

function App() {
  const [count, setCount] = useState(0)

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

      <button>Entrar</button>
      <p>Não tem conta? <a href="http://">Criar</a></p>
      </div>

      </section>
    </>
  )
}

export default App