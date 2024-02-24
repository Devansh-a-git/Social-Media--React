/* eslint-disable react/prop-types */
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Post() {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card content.
//         </p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   );
// }

// import { useContext } from "react";
// // import { AiFillDelete } from "react-icons/ai";
// import { PostList } from "../dataStore/PostList.data";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);

//   return (
//     <div className="card post-card " style={{ width: "30rem" }}>
//       <div className="card-body ">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             onClick={() => deletePost(post.id)}
//           >
//             X{/* <AiFillDelete /> */}
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>

//         {post.tags.map((tag) => (
//           <span key={tag} className="badge text-bg-primary hashtag devTags">
//             {tag}
//           </span>
//         ))}

//         <div className="alert alert-success reactions" role="alert">
//           This post has been reacted by {post.reactions} people.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

import { useContext } from "react";
// import { AiFillDelete } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { PostList } from "../dataStore/PostList.data";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card devPost" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger devCancel"
            onClick={() => deletePost(post.id)}
          >
            {/* <AiFillDelete /> */} <MdDeleteSweep />
          </span>
        </h5>
        <p className="card-text devPostBody">{post.body}</p>
        <div className="devPostEnd">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag devTags">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
