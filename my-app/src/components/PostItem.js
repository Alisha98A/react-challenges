import React from 'react'
import styles from "./css/Content.module.css";

const PostItem = ({ posts }) => {
    return posts.map((post, index) => (
      <div key={index} className={styles.searchItem}>
        <h2>{post.title}</h2>
        <p>{post.name}</p>
        <img src={post.image} alt={post.title} />
        <p>{post.description}</p>
      </div>
    ));
  };

export default PostItem