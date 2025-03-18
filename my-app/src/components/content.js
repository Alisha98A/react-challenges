import React, { Component } from "react";
import { savedPosts } from "../posts.json"; // Import JSON data
import styles from "./css/Content.module.css"; // Import CSS
import PostItem from "./PostItem"; // Import PostItem component

class Content extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>My Posts</h1>
        <div className={styles.postList}>
          <PostItem posts={savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content;