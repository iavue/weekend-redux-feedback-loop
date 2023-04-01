const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST the feedback to the database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding Feedback`, newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback:`, error);
      res.sendStatus(500);
    });
});


module.exports = router;