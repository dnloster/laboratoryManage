"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db.config");

module.exports = {
    get: (req, res) => {
        let sql =
            "select tb.TenTB,tbm.HanTra,gv.TenGV from THIETBI tb, THIETBIMUON tbm, PHIEUMUON pm, GIAOVIEN gv where tb.MaTB = tbm.MaTB and tbm.MaPhieu = pm.MaPhieu and pm.IDGiaoVien = gv.IDGiaoVien  and tbm.HanTra< CURDATE()";
        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
};
