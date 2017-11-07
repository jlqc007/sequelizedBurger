var express = require("express");
var router = express.Router();
var db = require("../models/");
// console.log(db);

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll()
      .then(function(dbBurger){
      //  console.log(dbBurger);
        var hbsObject = { Burger: dbBurger };
        return res.render("index", hbsObject);
      });
    });

    router.post("/burgers/create", function(req, res) {
     console.log("ksjflsjfiajfl", typeof req.body);
      db.Burger.create({
        burger: req.body.burger
      })
    .then(function(dbBurger){
    //  console.log(dbBurger);
      res.redirect("/");
    });
   
    });
  
router.put("/burgers/update", function(req, res) {
  console.log("lskjfisjeflskmef", req.body);
    db.Burger.update(
    {
      devoured:true
    },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger){
  //  console.log(dbBurger);
    res.redirect("/");
  });
    });

  
 
  module.exports = router;
