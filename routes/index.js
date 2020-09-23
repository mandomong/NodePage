var express = require('express');
var router = express.Router();
var serverData;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: serverData });
  console.log("serverData is loaded : " + serverData);
});

router.post('/save', function(req, res, next){
  var data = req.body.data;
  serverData = data;
  console.log("serverData is saved : " + serverData);
});

module.exports = router;
