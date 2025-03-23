import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import { API_KEY } from "../secrets"; // Keep API key secure

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [], // ✅ Stores full API response
        };
    }

    // ✅ Fetch images from API & save full response
    async fetchImages() {
        try {
            const response = await axios.get(`https://api.example.com/photos?api_key=${API_KEY}&per_page=100`);
            console.log(response); // Debugging: Check API response structure

            const fetchedPosts = response.data.hits; // ✅ Extract 'hits'

            // ✅ Save data in both 'posts' (current view) & 'savedPosts' (full data)
            this.setState({
                isLoaded: true,
                posts: fetchedPosts,
                savedPosts: fetchedPosts, // ✅ Store full response for filtering
            });

        } catch (error) {
            console.error("Error fetching images:", error);
            this.setState({ isLoaded: true }); // Prevent infinite loading if API fails
        }
    }

    // ✅ Call fetchImages() when the component mounts
    componentDidMount() {
        this.fetchImages();
    }

    // ✅ Update search filter to use savedPosts
    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post) =>
            post.user.toLowerCase().includes(name) // ✅ Updated from 'name' to 'user'
        );

        this.setState({
            posts: filteredPosts
        });
    };

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchinput">Search</label>
                        <input 
                            type="search" 
                            id="searchinput" 
                            placeholder="By Author"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <h4>Posts Found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItemAPI posts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        );
    }
}

export default Content;