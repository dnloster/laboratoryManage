"use strict";
module.exports = function (app) {
    let getToolsCtrl = require("./controllers/listToolsController.js");
    let getBorrowedTools = require("./controllers/listBorrowedToolController.js");
    let outdateTools = require("./controllers/outdateToolsController.js");
    let labtestID = require("./controllers/labtestIDController.js");

    // danh sách thiết bị theo chủng loại
    app.route("/tools").get(getToolsCtrl.get);

    // danh sách thiết bị đang được mượn sắp tới hạn trả (trước 05 ngày)
    app.route("/borrowedTools").get(getBorrowedTools.get);

    // danh sách thiết bị đã quá hạn trả
    app.route("/outdateTools").get(outdateTools.get);

    // danh sách các bài thí nghiệm của giáo viên theo ID của giáo viên đó
    app.route(`/labtestID/:id`).get(labtestID.get);
};
