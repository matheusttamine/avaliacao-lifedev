import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc (collection(db, "posts"), {
            title,
            content,
            author: "Nome do Usuário",
            createdAt: new Date()
        
        });
        navigate("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Conteúdo"
            />
            <button type="submit">Salvar</button>
        </form>
    );
}
