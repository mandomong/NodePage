var express = require('express');
var router = express.Router();
const maria = require('../config/maria');

/* GET home page. */
router.get('/', function(req, res, next) {

    var mariaSQL = 'SELECT IP'                                              +
                         ',USER'                                            +
                         ',PURPOSE'                                         +
                         ',DATE_FORMAT(LAST_UPDATED,"%Y%m%d") LAST_UPDATED' +
                    ' FROM APP_IP';

    maria.query(mariaSQL, function(err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
        if (!err) {
            //res.send(rows); // rows 를 보내주자
            res.render('ip', { result: rows });
        } else {
            res.send('error : ' + err);
            //res.send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
        }
    });

});

router.post('/return', function(req, res, next){
    var params = req.body.ip;
    console.log(params);
    var mariaSQL = 'UPDATE APP_IP SET USER = NULL, PURPOSE = NULL, LAST_UPDATED = NOW() WHERE IP = ?';

    maria.query(mariaSQL, [params], function(err, rows, fields){
        if (!err) {
            res.send('success');
        } else {
            console.log(err);
            res.send('error : ' + err);
        }
    });
});

module.exports = router;
