const express = require('express');
const router = express.Router();

//GET Home path
router.get('/', (req, res) => {
    res.render('index', { title: "Node Endpoint Project", message: "Search by Author:"})
});

module.exports = router;