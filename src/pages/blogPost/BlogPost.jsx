import "./BlogPost.css";
import {useParams} from "react-router-dom";
import dateFormatter from "../../helpers/dateFormatter.js";
import { CaretLeft } from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost() {
    const [postInfo, setPostInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const { postId } = useParams();

    useEffect(() => {
        async function fetchPost() {
            try {
                const result = await axios.get(`http://localhost:3000/posts/${postId}`);
                setPostInfo(result.data);
            } catch(e) {
                console.error(e);
                setErrorMessage("Het laden van de post is mislukt. Probeer het opnieuw.")
            }
        }
        fetchPost();
    }, []);

    return (
        <div className="page-container">
            {Object.keys(postInfo).length === 0 && <div className="inner-container">
                <h2 className="error_message">{errorMessage}</h2>
            </div>}
            {Object.keys(postInfo).length > 0 && <div className="inner-container">
                <article>
                    <h2>{postInfo.title} ({postInfo.readTime} minuten)</h2>
                    <h3>{postInfo.subtitle}</h3>
                    <p>Geschreven door {postInfo.author} op {dateFormatter(postInfo.created)}</p>
                    <p>{postInfo.content}</p>
                    <p>{postInfo.comments} reacties - {postInfo.shares} keer gedeeld</p>
                    <p><a href="/overview" className="return_home_link"><CaretLeft />Terug naar de overzichtspagina</a></p>
                </article>
            </div>}
        </div>
    )
}

export default BlogPost;