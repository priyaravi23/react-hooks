import React, {useEffect} from 'react';
import axios from 'axios';

// Types
import {CommentsType} from './Comments.types'

interface Props {
    comments: CommentsType[]
    setComments: any
}

export const Comments = (props: Props) => {
    const {comments, setComments} = props;
    const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get<CommentsType>(COMMENTS_URL);
                setComments(data);
            } catch(error) {
                throw new Error(`Unhandled request, ${error}`)
            }
        })()
    }, []);

    return (
        <>
            {comments.map((comment: CommentsType)  => (
                <div key={comment.name} className="users__user">
                    <div className="users__meta">
                        <h1>{comment.name}</h1>
                        <p>{comment.email}</p>
                    </div>
                </div>
            ))}
            </>
    )
};