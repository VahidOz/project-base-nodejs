var express = require('express');
var router = express.Router();

// Dosya işlemlerini yapabilmemizi sağlayan kütüphane
const fs = require("fs");

// readdirSync bir yol vereceğim bunu sencronize olarak oku.
// yani burası bitmeden koda devam etme
let routes = fs.readdirSync(__dirname);

for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    router.use("/"+route.replace(".js", ""), require('./'+route));
  }
}

/* GET home page. */
/*
const config = require('../config');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vahid', config });
});
*/

module.exports = router;
