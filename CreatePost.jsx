import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {

  const navigate = useNavigate();

  const handdleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        navigate("/feed");
        alert("post created successfully");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("error creating post"); 
      });
  };

  return (
    <section className="create-post-section">

      <div className="create-post-container">

        <h1 className="create-post-title">Create Post</h1>

        <form className="create-post-form" onSubmit={handdleSubmit}>

          <div className="upload-box">
            <p className="upload-text">Upload Image</p>
            <input type="file" name="image" accept="image/*" />
          </div>

          <input
            type="text"
            name="caption"
            placeholder="Enter caption..."
            required
            className="caption-input"
          />

          <button type="submit">Submit</button>

        </form>

      </div>

    </section>
  );
};