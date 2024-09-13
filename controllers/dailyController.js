"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDeleteDaily = exports.postUpdateDaily = exports.getUpdateDaily = exports.postCreateDaily = exports.getCreateDaily = exports.getListDaily = exports.handleError = void 0;
// Import
const mongoose_daily_models_js_1 = __importDefault(require("../models/mongoose_daily_models.js"));
//////////////////////////////////////////////////////////////////////////
// DRY Principle (Don't Repeat Yourself)
const handleError = (err, response, message) => {
    console.error(err);
    response.status(400).json({ message });
};
exports.handleError = handleError;
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
    try {
        const { header, content, author, tags } = request.body;
        const newDaily = await new mongoose_daily_models_js_1.default({ header, content, author, tags }).save();
        console.warn(newDaily);
        response.json(newDaily);
    }
    catch (err) {
        (0, exports.handleError)(err, response, "MongoDB'ye  Eklenemedi");
    }
};
exports.postCreateDaily = postCreateDaily;
//////////////////////////////////////////////////////////////////////////
// Daily Update Page
const getUpdateDaily = async (request, response) => {
    try {
        const daily = await mongoose_daily_models_js_1.default.findById(request.params.id);
        if (!daily) {
            return response.status(404).send("Günlük kaydı bulunamadı");
        }
        response.render("edit", { daily });
    }
    catch (err) {
        response.status(500).send("Sunucu hatası");
    }
};
exports.getUpdateDaily = getUpdateDaily;
// Daily Update Page AJAX
const postUpdateDaily = async (request, response) => {
    try {
        const id = request.params.id;
        const { header, content, author, tags } = request.body;
        const update = await mongoose_daily_models_js_1.default.findByIdAndUpdate(id, {
            header,
            content,
            author,
            tags,
        });
        //  response.json({ success: true }); //Bu güncelleme sonrasında ekranda göstersin
        console.warn(update);
        response.redirect("/");
    }
    catch (err) {
        (0, exports.handleError)(err, response, "MongoDB'ye  Eklenemedi");
    }
};
exports.postUpdateDaily = postUpdateDaily;
//////////////////////////////////////////////////////////////////////////
// Daily Delete
const postDeleteDaily = async (request, response) => {
    try {
        const id = request.params.id;
        const deleteFindById = await mongoose_daily_models_js_1.default.findByIdAndDelete(id);
        console.warn(deleteFindById);
        //response.json({ success: true });
        response.status(200).json({ message: `${id} nolu veri silindi` });
    }
    catch (err) {
        (0, exports.handleError)(err, response, "MongoDB'ye  Eklenemedi");
    }
};
exports.postDeleteDaily = postDeleteDaily;
