"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db.config");

module.exports = {
    get: (req, res) => {
        let id = req.params.id;
        let sql =
            "select gv.TenGV,btn.TenBTN from GIAOVIEN gv,PHIEUDANGKI pdk,BAITHINGHIEM btn where gv.IDGiaoVien = pdk.IDGiaoVien and pdk.MaBaiThiNghiem = btn.MaBaiThiNghiem and gv.IDGiaoVien=?";
        db.query(sql, [id], (error, results) => {
            if (error) throw error;
            return res.send({ error: false, data: results });
        });
    },
};
