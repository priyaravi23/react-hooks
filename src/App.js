import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/comments")
            .then(response =>
                response.data.map(comment => ({
                    name: `${comment.name}`,
                    email: `${comment.email}`
                }))
            )
            .then(data => {
                setComments(data);
            });
    }, []);

    return (
        <div className="users">
            {comments.map(comment => (
                <div key={comment.name} className="users__user">
                    <div className="users__meta">
                        <h1>{comment.name}</h1>
                        <p>{comment.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}