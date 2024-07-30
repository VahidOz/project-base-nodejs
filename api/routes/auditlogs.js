const express = require("express");
const router = express.Router();

// req  : Request objesi gönderilen istekdeki body, header gibi bilgileri barındırır.
// res  : Responce objesi cevap için vereceğimiz fonksiyonları barındırır.
// next : Bu get isteği bir middleware olarak kullanılacak ise, yani burada işlemleri yaptıktan sonra aşağıda başka bir router çalışacak ise bunu next sağlar.
// buradaki işlem bitince bir sonraki router a git demek. 
router.get("/:id", (req, res, next) => {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    });
})

module.exports = router;