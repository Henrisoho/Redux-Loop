import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

function Review() {
const history = useHistory();

const feeling = useSelector(store => store.addFeeling);
const understanding = useSelector(store => store.addUnderstanding);
const support = useSelector(store => store.addSupport);
const comment = useSelector(store => store.addComment);

const onPostClick = (event) =>{
  event.preventDefault();
    axios({
      method: 'POST',
      url: '/answers',
      data: 
        {
  feeling: feeling[0],
  understanding: understanding[0],
  support: support[0],
  comments: comment[0],
        }
    }).then((response) => {
      console.log(response)
      history.push('/Thanks')
    }).catch((err) => {
      console.error('handleSubmit fail:', err)
    })
}

console.log(feeling[0])
return (
    <>
    <div>
      <h1>review your answers</h1>
                <ul>
                    <h2>Feeling: {feeling[0]}</h2>
                    <h2>Understanding: {understanding[0]}</h2>
                    <h2>Support: {support[0]}</h2>
                    <h2>Comments: "{comment[0]}"</h2>
                </ul>
              <Box p={4}>
            <Button variant="contained" onClick={onPostClick}>Submit</Button>
        </Box>
    </div>
    </>
  )
}


export default Review;