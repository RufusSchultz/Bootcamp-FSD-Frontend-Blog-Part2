import "./CreateNewBlogPost.css";
import {useState} from "react";
import timeStamper from "../../helpers/timeStamper.js";
import readTimer from "../../helpers/readTimer.js";
import {useNavigate} from "react-router-dom";
import InputField from "../../components/InputField.jsx";

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

    function handleSubmit(e) {
        e.preventDefault();
        if (!formState.title || !formState.subtitle || !formState.author || !formState.content) {
            setValidationError("Alle velden invullen, alsjeblieft.");
            return;
        }
        if (formState.content.length < 300 || formState.content.length > 2000) {
            setValidationError("Je bericht is niet tussen de 300 en 2000 tekens lang.");
            return;
        }

        formState.comments = 0;
        formState.shares = 0;
        formState.created = timeStamper();
        formState.readTime = readTimer(formState.content);
        console.log(formState);
        navigate("/overview");

    }

    return (<div className="page-container">
            <div className="inner-container">
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

                    <button type={"submit"}>Toevoegen</button>
                    {validationError.length > 0 && <p className="validation_error">{validationError}</p>}
                </form>
            </div>

        </div>)
}

export default CreateNewBlogPost;