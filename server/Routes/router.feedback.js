const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/add', (req, res) => {
  let feedback = req.body;
  let sqlText =
    `INSERT
      INTO "feedback"
        ("feeling", "understanding", "support", "comments")
      VALUES
        ($1, $2, $3, $4);`
  let values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]

  pool
    .query(sqlText, values)
    .then(result => {
      console.log(`successful POST route to database`)
      res.sendStatus(201)
    })
    .catch(err => {
      console.log(`errror on POST route to database: ${err}`)
      res.sendStatus(500)
    })
})

module.exports = router
