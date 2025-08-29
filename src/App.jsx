import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao n1={10} n2={20} />
      <p></p>
      <Subtracao n1={41} n2={19} />
      <p></p>
      <Multiplicacao n1={90} n2={15} />
      <p></p>
      <Divisao n1={240} n2={50} />
    </div>
  )
}

export default App