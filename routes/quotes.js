'use strict';
const express = require('express');
const QuotesModel = require('../models/QuotesModel');
const router = express.Router();

//Use req.params to get id from url, enter id into model function, render response as json
router.get('/:id?', async (req, res) => {
    const { id } = req.params;
    const quote = await QuotesModel.getById(id)
    res.json(quote).status(200);

})




module.exports = router;