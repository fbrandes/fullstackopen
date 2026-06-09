const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis');

/* GET statistics */
router.get('/', async (req, res) => {
  const addedTodos = await getAsync('added_todos')
  res.send({
    added_todos: parseInt(addedTodos) || 0
  });
});

module.exports = router;
