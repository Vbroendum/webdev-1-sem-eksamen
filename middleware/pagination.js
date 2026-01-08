// middleware/pagination.js
const express = require("express");

function pagination(req, res, next) {
    const page = parseInt(req.query.page) || 10;
    const limit = parseInt(req.query.limit) || 1;
    const start = (page - 1) * limit;

    req.pagination = {page, limit, start};
    next();
};

module.exports = {
    pagination
};