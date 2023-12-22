//Hoofdletter aanpassen zodra deze opdracht klaar is en er verder gegaan wordt.
import axios from "axios";
import {useEffect, useState} from "react";

function practiseRequests() {

    const [firstPost, setFirstPost] = useState({});

    useEffect(() => {
        async function fetchFirstPost() {
            try {
                const result = await axios.get("http://localhost:3000/posts/1");
                setFirstPost(result.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchFirstPost();
    }, []);

    //Opdracht 1.1
    async function fetchAllPosts() {
        try {
            const result = await axios.get("http://localhost:3000/posts");
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }

    //Opdracht 1.2
    async function fetchPostSix() {
        try {
            const result = await axios.get("http://localhost:3000/posts/6");
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }

    //Opdracht 1.3
    async function postTestPost() {
        try {
            const result = await axios.post("http://localhost:3000/posts", {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            });
            console.log(result);
            console.log("Het is toevoegen van een nieuwe post is gelukt!");
        } catch(e) {
            console.error(e);
            console.log("Het toevoegen van een nieuwe post is mislukt!")
        }
    }


    //Opdracht 1.5
    async function removeTestPost() {
        try {
            const result = await axios.delete("http://localhost:3000/posts/19");
            console.log(result);
            console.log("Testpost succesvol verwijderd!")
        } catch(e) {
            console.error(e);
            console.log("Mislukt! Geen post met id: 19 aanwezig!")
        }
    }

    //Opdracht 1.6
     async function changeFirstPost() {
        try {
            await axios.put("http://localhost:3000/posts/1", {
                ...firstPost,
                subtitle: "Een lekkere tocht door prachtig Italië",
            });
            console.log("De post is succesvol gewijzigd!");
        } catch(e) {
            console.error(e);
            console.log("Het wijzigen is mislukt!");
        }
    }

    return (
        <>
            <h1>Blog part 2 opdracht 1</h1>
            <div>
                <button onClick={fetchAllPosts}>Alle posts</button>
            </div>
            <div>
                <button onClick={fetchPostSix}>Post 6</button>
            </div>
            <div>
                <button onClick={postTestPost}>Testpost toevoegen</button>
            </div>
            <div>
                <button onClick={removeTestPost}>Testpost verwijderen</button>
            </div>
            <div>
                <button onClick={changeFirstPost}>Eerste post subtitel aanpassen</button>
            </div>
        </>
    )
}

export default practiseRequests;

//Backup van post id:1 van de database:

    // "title": "De Smaken van Italië",
    // "subtitle": "Een culinaire reis door Bella Italia",
    // "content": "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
    // "created": "2023-09-21T09:30:00Z",
    // "author": "Anna de Kok",
    // "readTime": 5,
    // "comments": 12,
    // "shares": 8