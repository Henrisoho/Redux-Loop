import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported() {
    const history = useHistory();
    const dispatch = useDispatch()


    const [newSupported, setNewSupported] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: newSupported
        })
        history.push('/Comments')
    }

    return (
        <>
            <h1>Do you feel Supported</h1>
            <form onSubmit={handleSubmit}>
                <input
                    typye="number"
                    placeholder="0-10"
                    value={newSupported}
                    onChange={(event) => setNewSupported(event.target.value)}
                    required />
                <button>Next</button>
            </form>
        </>
    )
}


export default Supported;