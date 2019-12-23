const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send({'success':'I am json resp'});
});

module.exports = router;
