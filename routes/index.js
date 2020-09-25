var express = require('express');
var router = express.Router();

//const maria = require('../config/maria');

var serverData;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: serverData });
  console.log("serverData is loaded : " + serverData);

  /*
  maria.query('select * from test', function(err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
    if (!err) { // 에러가 없다면
      //res.send(rows); // rows 를 보내주자
      console.log(rows);
    } else { // 에러가 있다면?
      console.log("err : " + err);
      //res.send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
    }
  });
   */

});

router.post('/save', function(req, res, next){
  var data = req.body.data;
  serverData = data;
  console.log("serverData is saved : " + serverData);
});

module.exports = router;
