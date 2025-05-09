import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            setPosts(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post =>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Por: {post.author}</p>
                    <link to={`/post/${post.id}`}>Ver post</link>
                    </div>
            ))}
        </div>
    );
}