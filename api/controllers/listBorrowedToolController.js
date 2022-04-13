"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db.config");

module.exports = {
    get: (req, res) => {
        let sql =
            "select tb.TenTB,tbm.HanTra,gv.TenGV from thietbi tb, thietbimuon tbm, phieumuon pm, giaovien gv where tb.MaTB = tbm.MaTB and tbm.MaPhieu = pm.MaPhieu and pm.IDGiaoVien = gv.IDGiaoVien and ( DATE_ADD(CURDATE(), INTERVAL 5 DAY) > tbm.HanTra) and tbm.HanTra> CURDATE()";
        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
};
