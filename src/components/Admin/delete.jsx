import React from "react";
import axios from 'axios';


function Delete({ response, fetch }) {

    const deleteHandler = (event) => {
        event.preventDefault();
        deleteItem({response, fetch })
    }

const deleteItem = ({ response, fetch }) =>{
        axios.delete(`/answers/${response.id}`)
            .then(response => {
                console.log(`this was clicked ${response.id}`)
                fetch();
            })
            .catch(err => {
                alert('Error in DELETE route');
                console.log(err);
            })
    }

    return (
        <button onClick={deleteHandler}>Delete</button>
    )
}


export default Delete;