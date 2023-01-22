import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function Reset() {
const history = useHistory();
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'RESET_SURVEY',
        })
        history.push('/')
    }

return (
    <>
      <h1>Thank you for completeing the Survery</h1>
            <button onClick={handleSubmit}>New Survery</button>
    </>
  )
}


export default Reset;