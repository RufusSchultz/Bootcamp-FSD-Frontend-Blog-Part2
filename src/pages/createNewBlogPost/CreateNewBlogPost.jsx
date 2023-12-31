import "./CreateNewBlogPost.css";
import {useState} from "react";
import timeStamper from "../../helpers/timeStamper.js";
import readTimer from "../../helpers/readTimer.js";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../components/InputField.jsx";
import axios from "axios";

function CreateNewBlogPost() {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
        created: "",
        readTime: 0,
        comments: 0,
        shares: 0,
    });

    function handleFormChange(e) {
        setFormState({
            ...formState, [e.target.name]: e.target.value,
        });
    }

    const [validationError, setValidationError] = useState("");
    const [uploadSuccesMessage, setUploadSuccesMessage] = useState(false);
    const [uploadError, setUploadError] = useState("");
    const [uploadId, setUploadId] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formState.title || !formState.subtitle || !formState.author || !formState.content) {
            setValidationError("Alle velden invullen, alsjeblieft.");
            return;
        }
        if (formState.content.length < 300 || formState.content.length > 2000) {
            setValidationError("Je bericht is niet tussen de 300 en 2000 tekens lang.");
            return;
        }
        try {
            formState.comments = 0;
            formState.shares = 0;
            formState.created = timeStamper();
            formState.readTime = readTimer(formState.content);
            const upload = await axios.post("http://localhost:3000/posts", formState);
            console.log(upload);
            setUploadId("/posts/" + upload.data.id);
            setUploadSuccesMessage(true);
        } catch (e) {
            console.error(e);
            setUploadError("Er is iets mis gegaan! Probeer het opnieuw")
        }

    }

    return (
        <div className="page-container">
            {uploadSuccesMessage === false && <div className="inner-container">
                <h1>Post toevoegen</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input_fields_wrapper">
                        <InputField
                            title="Titel*"
                            id="title"
                            name="title"
                            value={formState.title}
                            onChange={handleFormChange}
                        />
                        <InputField
                            title="Subtitel*"
                            id="subtitle"
                            name="subtitle"
                            value={formState.subtitle}
                            onChange={handleFormChange}
                        />
                        <InputField
                            title="Auteur*"
                            id="author"
                            name="author"
                            value={formState.author}
                            onChange={handleFormChange}
                        />

                        <div>
                            <label htmlFor="content">Bericht*</label>
                            <textarea
                                id="content"
                                name="content"
                                rows="10"
                                placeholder="Je bericht moet 300 tot 2000 tekens lang zijn"
                                value={formState.content}
                                onChange={handleFormChange}
                                className="input_field"
                            />
                        </div>
                    </div>
                    <p>*verplicht veld</p>
                    {validationError.length > 0 && <p className="error">{validationError}</p>}
                    {uploadError.length > 0 && <p className="error">{uploadError}</p>}
                    <button type={"submit"}>Toevoegen</button>
                </form>
            </div>}
            {uploadSuccesMessage && <div className="inner-container">
                <h2 className="succes_text">De blogpost is succesvol toegevoegd. Je kunt deze <Link to={uploadId} className="succes_link">hier</Link> bekijken. </h2>
            </div>}

        </div>
    )
}

export default CreateNewBlogPost;