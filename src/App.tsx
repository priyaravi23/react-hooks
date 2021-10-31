import React, {useState} from 'react';

// Components
import {Comments} from '/Users/Priya/Documents/github/react-hooks/src/Comments/Comments'

// Styles
import './App.css';

export default function App() {
    const [comments, setComments] = useState([]);

    return (
        <div className="users">
            <Comments comments={comments} setComments={setComments} />
        </div>
    )
}