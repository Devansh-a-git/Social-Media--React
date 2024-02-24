/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostList } from "../dataStore/PostList.data";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const handleSubmit = () => {
    const form = document.getElementById("devForm");
    const formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData);
    formDataObject.tags = formDataObject.tags.split(" ");
    formDataObject = { ...formDataObject, id: Date.now() };
    console.log(formDataObject);

    addPost(formDataObject);
  };

  // const myFunc = async function CreatePostAction(data) {
  //   const formData = await data.request.formData();
  //   const postData = Object.fromEntries(formData);

  //   postData.tags = postData.tags.split(" ");

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(postData),
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       console.log("hello");
  //       console.log("heelo", post);
  //       addPost(post);
  //     });

  //   return redirect("/");
  // };

  return (
    <Form method="POST" id="devForm" className="create-post createForm">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        POST
      </button>
    </Form>
  );
};

// export const handleSubmit = () => {
//   const form = document.getElementById("devForm");
//   const formData = new FormData(form);
//   let formDataObject = Object.fromEntries(formData);
//   formDataObject.tags = formDataObject.tags.split(" ");
//   formDataObject = { ...formDataObject, id: Date.now() };
//   console.log(formDataObject);

//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formDataObject),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       console.log("hello");
//       console.log("heelo", post);
//       my(post);
//     });
// };

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
