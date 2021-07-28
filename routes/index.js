'use strict';
const express = require('express');
const router = express.Router();
const QuotesModel = require('../models/QuotesModel');

router.get('/', async (req, res) => {
    const QuotesData = await QuotesModel.getAll();
    res.json(QuotesData);
})

module.exports = router;