import React, { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const Post = {
      title,
      body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Title :</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
        </div>
        <div>
          <br />
          <label>Body :</label>
          <br />
          <textarea
            name="body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
