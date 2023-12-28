import "./BlogsOverviewPage.css";
import BlogListItem from "../../components/BlogListItem.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogsOverviewPage() {
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            try {
                const results = await axios.get("http://localhost:3000/posts");
                const result = results.data.map((result) => {
                    return result
                });
                setPosts(result);
            } catch (e) {
                console.error(e);
                setErrorMessage("Het ophalen van de posts is mislukt, probeer het later opnieuw")
            }
        }

        fetchPosts();
    }, []);

    return (<div className="page-container">
                {posts.length > 0 && <div className="inner-container">
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                    <ul className="blog_list_wrapper">
                        {posts.map((post) => {
                            return <li key={post.id} className="blog_wrapper">
                                <BlogListItem
                                    id={post.id}
                                    title={post.title}
                                    author={post.author}
                                    comments={post.comments}
                                    shared={post.shares}
                                />
                            </li>
                        })}
                    </ul>
                </div>}
                {posts.length === 0 && <div className="inner-container">
                    <h2>{errorMessage}</h2>
                </div>}
        </div>

    )
}

export default BlogsOverviewPage;