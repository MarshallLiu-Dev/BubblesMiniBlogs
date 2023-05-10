import React from 'react'
//css
import Styles from './Home.module.css' 

const Home = () => {
  return (
    <div className={Styles.home}>
      <h3>Detalhes do Carro</h3>
      <ul>
        <li>Marca: </li>
        <li>Km: </li>
        <li>Cor: </li>
      </ul>
    </div>
  )
}

export default Home