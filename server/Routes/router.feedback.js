const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET route
router.get('/', (req, res) => {
	let sqlText = `SElECT * FROM "feedback"
    ORDER BY "date" ASC`;

	pool
		.query(sqlText)
		.then(result => {
			console.log(`successful GET route from database`);
			res.send(result.rows);
		})
		.catch(err => {
			console.log(`error on GET route from database`);
			res.sendStatus(500);
		});
}); //end GET route

//POST route
router.post('/add', (req, res) => {
	let feedback = req.body;
	let sqlText = `INSERT
      INTO "feedback"
        ("feeling", "understanding", "support", "comments")
      VALUES
        ($1, $2, $3, $4);`;
	let values = [
		feedback.feeling,
		feedback.understanding,
		feedback.support,
		feedback.comments
	]; // values for SQL input santization

	pool
		.query(sqlText, values)
		.then(result => {
			console.log(`successful POST route to database`);
			res.sendStatus(201);
		})
		.catch(err => {
			console.log(`error on POST route to database: ${err}`);
			res.sendStatus(500);
		});
}); //end POST route

//PUT route
router.put('/flag/:id', (req, res) => {
	let flagStatus = req.body;
	let idToEdit = req.params.id;
	let sqlText = `UPDATE "feedback"
      SET
				"flagged" = NOT "flagged"
      WHERE "id" = $1;`;
	let values = [idToEdit]; // values for SQL input sanitization

	pool
		.query(sqlText, values)
		.then(result => {
			console.log(`successful PUT route to database`);
			res.sendStatus(201);
		})
		.catch(err => {
			console.log(`error on PUT route to database: ${err}`);
			res.sendStatus(500);
		});
});

module.exports = router;
