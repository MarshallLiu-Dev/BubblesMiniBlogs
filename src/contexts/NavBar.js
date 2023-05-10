import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthentication } from '../hooks/useauthentication';
import { useAuthValue } from '../context/AuthContext';

const NavBar = () => {

  const { logout } = useAuthentication();
  const { user } = useAuthValue();


  return (
      <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/'>
        <span><img src="./sunglass.png" alt="" className={styles.brand} /> Bubbles</span> Mini <span> Blogs </span>
        </NavLink> 
          <ul className={styles.links_list}>
            <li>
                  <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
              {!user && (
                <>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
                </>
              )}
              {user &&(
                <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
                </>
              )}
              <li>
                  <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")} >Sobre</NavLink>
              </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
        </ul>
    </nav>
  )
}

export default NavBar