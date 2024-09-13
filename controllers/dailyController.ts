// Import
import Daily from "../models/mongoose_daily_models.js";

// Request, Response (Express)
import { Request, Response } from "express";

//////////////////////////////////////////////////////////////////////////
// DRY Principle (Don't Repeat Yourself)
export const handleError = (
  err: unknown,
  response: Response,
  message: string
): void => {
  console.error(err);
  response.status(400).json({ message });
};

//////////////////////////////////////////////////////////////////////////
// Daily List
export const getListDaily = async (request: Request, response: Response) => {
  const dailyList = await Daily.find();
  response.render("index", { dailyList });
};

//////////////////////////////////////////////////////////////////////////
// Daily Create Page
export const getCreateDaily = async (request: Request, response: Response) => {
  response.render("create");
};

// Daily Create Page AJAX
export const postCreateDaily = async (request: Request, response: Response) => {
  try {
    const { header, content, author, tags } = request.body;
    const newDaily = await new Daily({ header, content, author, tags }).save();
    console.warn(newDaily);
    response.json(newDaily);
  } catch (err) {
    handleError(err, response, "MongoDB'ye  Eklenemedi");
  }
};

//////////////////////////////////////////////////////////////////////////
// Daily Update Page
export const getUpdateDaily = async (request: Request, response: Response) => {
  try {
    const daily = await Daily.findById(request.params.id);
    if (!daily) {
      return response.status(404).send("Günlük kaydı bulunamadı");
    }
    response.render("edit", { daily });
  } catch (err) {
    response.status(500).send("Sunucu hatası");
  }
};

// Daily Update Page AJAX
export const postUpdateDaily = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const { header, content, author, tags } = request.body;
    const update = await Daily.findByIdAndUpdate(id, {
      header,
      content,
      author,
      tags,
    });
    //  response.json({ success: true }); //Bu güncelleme sonrasında ekranda göstersin
    console.warn(update);
    response.redirect("/");
  } catch (err) {
    handleError(err, response, "MongoDB'ye  Eklenemedi");
  }
};

//////////////////////////////////////////////////////////////////////////
// Daily Delete
export const postDeleteDaily = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const deleteFindById = await Daily.findByIdAndDelete(id);
    console.warn(deleteFindById);
    //response.json({ success: true });
    response.status(200).json({ message: `${id} nolu veri silindi` });
  } catch (err) {
    handleError(err, response, "MongoDB'ye  Eklenemedi");
  }
};
