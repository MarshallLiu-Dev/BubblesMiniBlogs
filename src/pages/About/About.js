import React from 'react'
//css
import Styles from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={Styles.about}>
      <h2>
        <span><img src="./sunglass.png" alt="" className={Styles.brand} />Bubbles</span> Mini <span> Blogs </span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  )
}

export default About