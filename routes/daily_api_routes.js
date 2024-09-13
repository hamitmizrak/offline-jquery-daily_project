"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// İmport Router
const express_1 = require("express");
// Daily Controller
const dailyController_js_1 = require("../controllers/dailyController.js");
// Router
const router = (0, express_1.Router)();
///////////////////////////////////////////////////////////////////
// LIST (DAILY)
router.get("/", dailyController_js_1.getListDaily);
///////////////////////////////////////////////////////////////////
// CREATE (DAILY)
router.get("/create", dailyController_js_1.getCreateDaily);
router.post("/create", dailyController_js_1.postCreateDaily);
///////////////////////////////////////////////////////////////////
// UPDATE
router.get("/edit/:id", dailyController_js_1.getUpdateDaily);
router.post("/edit/:id", dailyController_js_1.postUpdateDaily);
///////////////////////////////////////////////////////////////////
// DELETE
router.post("/delete/:id", dailyController_js_1.postDeleteDaily);
// EXPORT ROUTER
exports.default = router; // Default export
