import React from 'react'
import styles from "./css/Content.module.css";

const PostItem = ({ posts }) => {
    return posts.map(({ name, title, description, image }, index) => (
        <div key={index}>
          <h2>{title}</h2>
          <p>{name}</p>
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
      ));
  };

export default PostItem