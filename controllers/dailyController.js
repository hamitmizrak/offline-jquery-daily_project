"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDeleteDaily = exports.postUpdateDaily = exports.getUpdateDaily = exports.postCreateDaily = exports.getCreateDaily = exports.getListDaily = void 0;
// Import
const mongoose_daily_models_js_1 = __importDefault(require("../models/mongoose_daily_models.js"));
//////////////////////////////////////////////////////////////////////////
// Daily List
const getListDaily = async (request, response) => {
    const dailyList = await mongoose_daily_models_js_1.default.find();
    response.render("index", { dailyList });
};
exports.getListDaily = getListDaily;
//////////////////////////////////////////////////////////////////////////
// Daily Create Page
const getCreateDaily = async (request, response) => {
    response.render("create");
};
exports.getCreateDaily = getCreateDaily;
// Daily Create Page AJAX
const postCreateDaily = async (request, response) => {
    const { header, content, author, tags } = request.body;
    const newDaily = await new mongoose_daily_models_js_1.default({ header, content, author, tags }).save();
    response.json(newDaily);
};
exports.postCreateDaily = postCreateDaily;
//////////////////////////////////////////////////////////////////////////
// Daily Update Page
const getUpdateDaily = async (request, response) => {
    const dailyUpdate = await mongoose_daily_models_js_1.default.findById(request.params.id);
    response.render("edit", { dailyUpdate });
};
exports.getUpdateDaily = getUpdateDaily;
// Daily Update Page AJAX
const postUpdateDaily = async (request, response) => {
    const { header, content, author, tags } = request.body;
    await mongoose_daily_models_js_1.default.findByIdAndUpdate(request.params.id, {
        header,
        content,
        author,
        tags,
    });
    response.json({ success: true });
};
exports.postUpdateDaily = postUpdateDaily;
//////////////////////////////////////////////////////////////////////////
// Daily Delete
const postDeleteDaily = async (request, response) => {
    await mongoose_daily_models_js_1.default.findByIdAndDelete(request.params.id);
    response.json({ success: true });
};
exports.postDeleteDaily = postDeleteDaily;
