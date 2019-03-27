var express = require("express");
var router = express.Router();

//burger DB functions
var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    //return all data from burger_db.burger
    burger.all(function (data) {
        let hbObj = { burger: data };
        console.log(hbObj);
        res.render("index", hbObj);

    });
});


router.post("/api/burger", function (req, res) {
    burger.create(        // insert into burger
        "burger_name",    // column
        req.body.name,    // value
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});


router.put("/api/burger/:id", function (req, res) {
    let where = 'id = ' + req.params.id;

    burger.update(
        "devoured",         // column
        req.body.devoured,  // value
        where,         // which burger to modify 
        function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            };
        });
});

module.exports = router;
