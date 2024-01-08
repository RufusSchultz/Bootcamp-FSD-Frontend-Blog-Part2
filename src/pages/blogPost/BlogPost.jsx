import "./BlogPost.css";
import {useParams} from "react-router-dom";
import dateFormatter from "../../helpers/dateFormatter.js";
import { CaretLeft, X } from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost() {
    const [postInfo, setPostInfo] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");
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

    async function deletePost() {
        try {
            const result = await axios.delete(`http://localhost:3000/posts/${postId}`);
            console.log(result);
            setDeleteMessage("Post succesvol verwijderd!");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="page-container">
            {deleteMessage.length === 0 && !postInfo && <div className="inner-container">
                <h2 className="message">{errorMessage}</h2>
            </div>}
            {deleteMessage.length === 0 && postInfo && <div className="inner-container">
                <article>
                    <h2>{postInfo.title} ({postInfo.readTime} minuten)</h2>
                    <h3>{postInfo.subtitle}</h3>
                    <p>Geschreven door {postInfo.author} op {dateFormatter(postInfo.created)}</p>
                    <p>{postInfo.content}</p>
                    <p>{postInfo.comments} reacties - {postInfo.shares} keer gedeeld</p>
                    <div className="link_and_button_line">
                        <p><a href="/overview" className="return_home_link"><CaretLeft />Terug naar de overzichtspagina</a></p>
                        <button onClick={deletePost} className="delete_button"><X />Verwijder post</button>
                    </div>
                </article>
            </div>}
            {deleteMessage && <div className="inner-container">
                <h2 className="message">De post is succesvol verwijderd.</h2>
            </div>}
        </div>
    )
}

export default BlogPost;