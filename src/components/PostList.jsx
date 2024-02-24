// import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";
import css from "./PostList.module.css";
import { useContext } from "react";
import { PostList as postListData } from "../dataStore/PostList.data";
import NoPost from "./noPost";
import Loader from "./Loader";

const PostList = () => {
  const { postList, loading } = useContext(postListData);
  // const postList = useLoaderData();

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className={css.PostListDiv}>
          {postList.length === 0 && <NoPost />}

          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

// export const PostListLoader = () => {
//   return fetch("https://dummyjson.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       return data.posts;
//     });
// };

export default PostList;
