const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ROUTE
router.get('/', (req, res) => {
    console.log('GET /answers');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /answers', error)
        res.sendStatus(500);
    });
})
// END GET ROUTE//

//POST ROUTE//
router.post('/', (req, res) => {
    const answer = req.body;
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [answer.feeling, answer.understanding, answer.support, answer.comments])
        .then((result) => {
            console.log(`Added Feedback`, answer);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
//END POST//


//DELETE ROUTE//
router.delete('/:id', (req, res) => {
  console.log(req.data);
  let idToDelete = req.params.id;

  let sqlQuery = `
    DELETE FROM "feedback"
      WHERE "id"=$1;        
  `
  let sqlValues = [idToDelete];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log( dbErr);
      res.sendStatus(500);
    })
})
//END DELETE ROUTE//


module.exports = router;