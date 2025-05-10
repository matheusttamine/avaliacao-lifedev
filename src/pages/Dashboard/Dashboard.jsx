import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection,getDocs } from "firebase/firestore";

export default function Dashboard(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const snapshot = await getDocs(collection(db, "posts"))
            setPosts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        }
        fetchPosts()
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>Autor: {post.author}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}