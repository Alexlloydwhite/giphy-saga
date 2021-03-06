const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "favorites";`;
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error with getting favorites from server', error);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  let newFavorite = req.body.url;
  console.log(req.body.url);
  console.log('req.body is:', req.body);
  console.log('Adding a new favorite', newFavorite);
  let queryText = `INSERT INTO "favorites" ("url")
                  Values ($1);`;
  pool.query(queryText, [newFavorite])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error with adding new favorite', error);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const favoriteToUpdate = req.params.id;
  const categoryToAdd = req.body;
  const sqlText = `UPDATE students SET category = $2 WHERE id = $1;`;
  pool.query(sqlText, [categoryToAdd.category_id, favoriteToUpdate])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error with making database query ${sqlText}`, error);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/:favId', (req, res) => {
  const favToDelete = req.params.id;
  const queryText = `DELETE FROM "favorites" WHERE id=$1;`;
  pool.query(queryText, [favToDelete])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error with deleting favorite', error);
    res.sendStatus(500);
  })
});

module.exports = router;
