import React from 'react'
//css
import Styles from './Home.module.css' 
import { useState } from "react";

// hooks
import { useauthentication } from "./../../hooks/useauthentication";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from '../../components/PostDetail';
// components


// react

const Home = () => {

  // const [posts] = useState([]);
  const { documents: posts, loading } = useFetchDocuments("posts");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }

};
  return (
    <div className={Styles.home}>

      <h1></h1>
      <form className={Styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar no MiniBlog...."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post)=><PostDetail key={post.id} post={post}/>)}
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