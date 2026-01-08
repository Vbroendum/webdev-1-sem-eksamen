// route/listRoute.js
const router = express.Router();
const express = require(express);
const db = require('../models');
const { renderList } = require('..controllers/ListController');
const { pagination } = require('../moddleware/pagination');



//Gør liste informationerne dynamiske
