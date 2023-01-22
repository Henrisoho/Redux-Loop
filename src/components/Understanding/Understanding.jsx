import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';
import { useState } from 'react';

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [newUndertsand, setNewUndertsand] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: newUndertsand
        })
        history.push('/Supported')
    }

return (
    <>
        <h1>How well do you Understanding</h1>
        <form onSubmit={handleSubmit}>
            <input
                typye="number"
                placeholder="0-10"
                value={newUndertsand}
                onChange={(event) => setNewUndertsand(event.target.value)}
            required />
            <button>Next</button>
        </form>
        </>
)
}


export default Understanding;