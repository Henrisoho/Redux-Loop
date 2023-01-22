import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Admin.css'
import Delete from "./delete";

function Admin() {

  const responses = useSelector(store => store.answerList);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, [])

  const fetch = () => {
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
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {responses?.map((response) => {
            {console.log(response.id)}
            return (
              <tr key={response.id}>
                <td>{response.feeling}</td>
                <td>{response.understanding}</td>
                <td>{response.support}</td>
                <td>{response.comments}</td>
                <td><Delete response={response} fetch={fetch}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}


export default Admin;