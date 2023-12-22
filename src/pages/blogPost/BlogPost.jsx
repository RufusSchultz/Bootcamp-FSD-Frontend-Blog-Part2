import "./BlogPost.css";
import posts from "../../constants/data.json";
import {useParams} from "react-router-dom";
import dateFormatter from "../../helpers/dateFormatter.js";
import { CaretLeft } from "@phosphor-icons/react";

function BlogPost() {
    const { postId } = useParams();

    const postInfo = posts.find((post) => {return post.id.toString() === postId});

    return (
        <div className="page-container">
            <div className="inner-container">
                <article>
                    <h2>{postInfo.title} ({postInfo.readTime} minuten)</h2>
                    <h3>{postInfo.subtitle}</h3>
                    <p>Geschreven door {postInfo.author} op {dateFormatter(postInfo.created)}</p>
                    <p>{postInfo.content}</p>
                    <p>{postInfo.comments} reacties - {postInfo.shares} keer gedeeld</p>
                    <p><a href="/overview" className="return_home_link"><CaretLeft />Terug naar de overzichtspagina</a></p>
                </article>
            </div>
        </div>
    )
}

export default BlogPost;