import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Admin.css'

function Admin() {

const responses = useSelector(store => store.answerList);

const dispatch = useDispatch();

useEffect(() => {
    axios({
      method: 'GET',
      url: '/answers',
    }).then((response) => {
      dispatch({
        type: 'SET_ANSWER',
        payload: response.data
      })
    }).catch((err) => {
      console.error('answerList useEffect fail:', err)
    })
  }, [])
    

return (
    <>
      <table>
  <tr>
    <th>Feeling</th>
    <th>Comprehension</th> 
    <th>Support</th>
    <th>Comments</th>
  </tr>
  {responses?.map((response)=>{
    return(
  <tr key={response.id}>
    <td>{response.feeling}</td>
    <td>{response.understanding}</td> 
    <td>{response.support}</td>
    <td>{response.comments}</td>
  </tr>
    )
  })}
</table>
    </>
  )
}


export default Admin;