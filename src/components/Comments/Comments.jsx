import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [newComments, setNewComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComments
        })
        history.push('/Review')
    }

    return (
        <>
            <h1>Do you have any Comments</h1>
            <form onSubmit={handleSubmit}>
                <input
                    typye="Text"
                    placeholder="Comments"
                    value={newComments}
                    onChange={(event) => setNewComments(event.target.value)}
                    required />
                    <button>Next</button>
            </form>
            </>
    )
}


export default Comments;