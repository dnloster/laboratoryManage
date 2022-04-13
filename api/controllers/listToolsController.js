"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db.config");

module.exports = {
    get: (req, res) => {
        let sql =
            "select tb.TenTB,ltb.TenLoai from THIETBI tb, LOAITHIETBI ltb where tb.MaLoai = ltb.MaLoai";
        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
};
