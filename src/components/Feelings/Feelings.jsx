import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useState } from 'react';

function Feelings() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [newFeelings, setNewFeelings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELING',
            payload: newFeelings
        })
        history.push('/Understanding')
    }

    return (
        <>
            <h1>How do you feel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    typye="number"
                    placeholder="0-10"
                    value={newFeelings}
                    onChange={(event) => setNewFeelings(event.target.value)}
                    required />
                <button>Next</button>
            </form>
        </>
    )
}


export default Feelings;