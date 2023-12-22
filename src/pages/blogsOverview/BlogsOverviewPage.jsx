import "./BlogsOverviewPage.css";
import posts from "../../constants/data.json";
import BlogListItem from "../../components/BlogListItem.jsx";

function BlogsOverviewPage() {
    return (<div className="page-container">
            <div className="inner-container">
                <div>
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                </div>
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
            </div>

        </div>

    )
}

export default BlogsOverviewPage;