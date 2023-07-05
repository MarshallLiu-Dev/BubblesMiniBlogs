// import React from 'react'
// import styles from "./CreatePost.module.css";
// import { useState } from 'react';
// import { useInsertDocument } from '../../hooks/useinsertDocuments';

// import { useNavigate, Link } from "react-router-dom";

// import { useAuthValue } from "../../context/AuthContext";


// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formError, setFormError] = useState("");

//   const { user } = useAuthValue();

//   const navigate = useNavigate();

//   const { insertDocument, response } = useInsertDocument("posts");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormError("");

//     // validate image
//     try {
//       new URL(image);
//     } catch (error) {
//       setFormError("A imagem precisa ser uma URL.");
//     }

//     // create tags array
//     const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

//     // check values
//     if (!title || !image || !tags || !body) {
//       setFormError("Por favor, preencha todos os campos!");
//     }

//     console.log(tagsArray);

//     console.log({
//       title,
//       image,
//       body,
//       tags: tagsArray,
//       uid: user.uid,
//       createdBy: user.displayName,
//     });

//     if(formError) return

//     insertDocument({
//       title,
//       image,
//       body,
//       tags: tagsArray,
//       uid: user.uid,
//       createdBy: user.displayName,
//     });

//     // redirect to home page
//     navigate("/");
//   };

//   return (
//     <div className={styles.create_post}>
//       <h2>Criar post</h2>
//       <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Título:</span>
//           <input
//             type="text"
//             name="text"
//             required
//             placeholder="Pense num bom título..."
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//         </label>
//         <label>
//           <span>URL da imagem:</span>
//           <input
//             type="text"
//             name="image"
//             required
//             placeholder="Insira uma imagem que representa seu post"
//             onChange={(e) => setImage(e.target.value)}
//             value={image}
//           />
//         </label>
//         <label>
//           <span>Conteúdo:</span>
//           <textarea
//             name="body"
//             required
//             placeholder="Insira o conteúdo do post"
//             onChange={(e) => setBody(e.target.value)}
//             value={body}
//           ></textarea>
//         </label>
//         <label>
//           <span>Tags:</span>
//           <input
//             type="text"
//             name="tags"
//             required
//             placeholder="Insira as tags separadas por vírgula"
//             onChange={(e) => setTags(e.target.value)}
//             value={tags}
//           />
//         </label>
//         {!response.loading && <button className="btn">Criar post!</button>}
//         {response.loading && (
//           <button className="btn" disabled>
//             Aguarde.. .
//           </button>
//         )}
//         {(response.error || formError) && (
//           <p className="error">{response.error || formError}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default CreatePost
import React, { useState } from 'react';
import moment from 'moment';
import styles from "./CreatePost.module.css";
import { useInsertDocument } from '../../hooks/useinsertDocuments';
import { useNavigate, Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const [dateTime, setDateTime] = useState("");

  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    setDateTime(currentDateTime);

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
      dateTime: currentDateTime,
    });

    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <p>Data e Hora de Criação: {moment(dateTime).format("DD/MM/YYYY HH:mm")}</p>
        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;




// import React, { useState } from 'react';
// import moment from 'moment';
// import styles from "./CreatePost.module.css";
// import { useInsertDocument } from '../../hooks/useinsertDocuments';
// import { useNavigate, Link } from "react-router-dom";
// import { useAuthValue } from "../../context/AuthContext";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formError, setFormError] = useState("");
//   const [dateTime, setDateTime] = useState("");

//   const { user } = useAuthValue();
//   const navigate = useNavigate();
//   const { insertDocument, response } = useInsertDocument("posts");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormError("");

//     try {
//       new URL(image);
//     } catch (error) {
//       setFormError("A imagem precisa ser uma URL.");
//     }

//     const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

//     if (!title || !image || !tags || !body) {
//       setFormError("Por favor, preencha todos os campos!");
//     }

//     const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
//     setDateTime(currentDateTime);

//     if (formError) return;

//     insertDocument({
//       title,
//       image,
//       body,
//       tags: tagsArray,
//       uid: user.uid,
//       createdBy: user.displayName,
//       dateTime: dateTime,
//     });

//     navigate("/");
//   };

//   return (
//     <div className={styles.create_post}>
//       <h2>Criar post</h2>
//       <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Título:</span>
//           <input
//             type="text"
//             name="text"
//             required
//             placeholder="Pense num bom título..."
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//         </label>
//         <label>
//           <span>URL da imagem:</span>
//           <input
//             type="text"
//             name="image"
//             required
//             placeholder="Insira uma imagem que representa seu post"
//             onChange={(e) => setImage(e.target.value)}
//             value={image}
//           />
//         </label>
//         <label>
//           <span>Conteúdo:</span>
//           <textarea
//             name="body"
//             required
//             placeholder="Insira o conteúdo do post"
//             onChange={(e) => setBody(e.target.value)}
//             value={body}
//           ></textarea>
//         </label>
//         <label>
//           <span>Tags:</span>
//           <input
//             type="text"
//             name="tags"
//             required
//             placeholder="Insira as tags separadas por vírgula"
//             onChange={(e) => setTags(e.target.value)}
//             value={tags}
//           />
//         </label>
//         {!response.loading && <button className="btn">Criar post!</button>}
//         {response.loading && (
//           <button className="btn" disabled>
//             Aguarde.. .
//           </button>
//         )}
//         {(response.error || formError) && (
//           <p className="error">{response.error || formError}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// const Post = ({ title, image, body, tags, uid, createdBy, dateTime }) => {
//   const formattedDateTime = moment(dateTime).format("DD/MM/YYYY HH:mm");

//   return (
//     <div>
//       <h2>{title}</h2>
//       <img src={image} alt="Imagem do post" />
//       <p>{body}</p>
//       <p>Tags: {tags.join(", ")}</p>
//       <p>Postado por: {createdBy}</p>
//       <p>Data e Hora: {formattedDateTime}</p>
//     </div>
//   );
// };

// const YourComponent = () => {
//   const post = {
//     title: "Título do post",
//     image: "https://example.com/image.jpg",
//     body: "Conteúdo do post",
//     tags: ["tag1", "tag2", "tag3"],
//     uid: "123",
//     createdBy: "Usuário",
//     dateTime: "2023-07-05 12:34:56",
//   };

//   return (
//     <div>
//       <CreatePost />
//       <Post
//         title={post.title}
//         image={post.image}
//         body={post.body}
//         tags={post.tags}
//         uid={post.uid}
//         createdBy={post.createdBy}
//         dateTime={post.dateTime}
//       />
//     </div>
//   );
// };

// export default YourComponent;
