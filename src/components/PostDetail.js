// import { Link } from "react-router-dom";

// import styles from "./PostsDelail.module.css";

// const PostDetail = ({ post }) => {
//     return (
//         <div className={styles.post_detail}>
//             <p className={styles.createdby}> @{post.createdBy}</p>
//             <img src={post.image} alt={post.title} />
//             <h2>{post.title}</h2>
//             <div className={styles.tags}>
//                 {post.tags.map((tag) => (
//                     <p key={tag}>
//                         <span>#</span>
//                         {tag}
//                     </p>
//                 ))}
//             </div>
//             <Link to={`/posts/${post.id}`} className="btn btn-outline">
//                 Ler
//             </Link>
//         </div>
//     );
// };

// export default PostDetail;

import { Link } from "react-router-dom";
import styles from "./PostsDelail.module.css";

const PostDetail = ({ post }) => {
    return (
        <div className={styles.post_detail}>
            <p className={styles.createdby}>@{post.createdBy}</p>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>Publicado em: {new Date(post.createdAt).toLocaleString()}</p> {/* Nova linha */}
            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ler
            </Link>
        </div>
    );
};

export default PostDetail;