var express = require('express');
var bodyParser = require('body-parser')


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  console.log(`FirstName: ${req.body.firstname}`)
  console.log(`LastName: ${req.body.lastname}`)
  res.send('Post recieved!')

})

router.use(bodyParser.urlencoded({extended: true}))

module.exports = router;
