import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";
import axios from "axios"
import { API_KEY } from "../secrets"; 

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
        };
    }

    // Fetch images from API instead of using savedPosts
    fetchImages = () => {
        axios.get(`https://api.example.com/photos?api_key=${API_KEY}`)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    posts: response.data, // Assuming response contains the posts
                });
            })
            .catch(error => {
                console.error("Error fetching images:", error);
                this.setState({ isLoaded: true }); // Avoid infinite loading if API fails
            });
    };

    // Call fetchImages() when the component mounts
    componentDidMount() {
        this.fetchImages();
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.posts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        });

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
                        <label htmlFor='searchinput'>Search</label>
                        <input 
                        type='search' 
                        id='searchinput' 
                        placeholder='By Author'
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>Posts Found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        );
    }
}

export default Content;