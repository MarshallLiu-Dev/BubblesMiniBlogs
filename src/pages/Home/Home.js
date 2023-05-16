import React from 'react'
//css
import Styles from './Home.module.css' 
import { useState } from "react";

// hooks
import { useFetchDocuments } from "./../../hooks/useauthentication";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments }

// react


// components
// import PostDetail from "../../components/PostDetail";


const Home = () => {

  // const [posts] = useState([]);
  const { documents: posts, loading } = useFetchDocuments("posts");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();}

  return (
    <div className={Styles.home}>

      <h1>Veja os nossos posts mais recentes</h1>
      <form className={Styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post)=><h3>{post.title}</h3>)}
        {posts && posts.length === 0 &&  (
          <div className={Styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post </Link>
          </div>
        )}
      </div>
    </div>
  );

  };


export default Home