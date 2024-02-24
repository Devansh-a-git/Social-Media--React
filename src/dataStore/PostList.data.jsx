/* eslint-disable react/prop-types */
// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currState, action) => {
//   return currState;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, defList);

//   const addPost = () => {};

//   const deletePost = () => {};

//   return (
//     <PostList.Provider value={{ postList, addPost, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };

// const defList = [
//   {
//     id: "1",
//     title: "WonderLa",
//     body: "Finally going to the place. Love the Excitement!",
//     likes: 12,
//     hastags: ["wonderLa", "Chutti", "bdday"],
//   },

//   {
//     id: "2",
//     title: "Daaru",
//     body: "Finally going to thechdvdhcvdnxhbjdf nkjbjhdbfcds hjdbgfjhdbs bhjdsfbjhdf hjkdgfjbs",
//     likes: 9,
//     hastags: ["daaru", "vodka", "russian"],
//   },
// ];

// export default PostListProvider;

// #################### ACTUAL FUCKING CODE ############

import { createContext, useReducer, useEffect, useState } from "react";

//CONTEXT

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addMultiplePosts: () => {},
  loading: Boolean,
});

// REDUCER

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "ADD_MULTIPLE_POSTS") {
    newPostList = action.payload.newPosts;
  }
  return newPostList;
};

// ####################### PROVIDER ########################

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addMultiplePosts(data.posts);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (post) => {
    console.log(`triggered : with : ${post.tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  const addMultiplePosts = (newPosts) => {
    dispatchPostList({
      type: "ADD_MULTIPLE_POSTS",
      payload: {
        newPosts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addMultiplePosts, loading }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
