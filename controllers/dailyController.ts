// Import
import Daily from "../models/mongoose_daily_models";

// Request, Response (Express)
import { Request, Response } from "express";

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
  const { header, content, author, tags } = request.body;
  const newDaily = await new Daily({ header, content, author, tags }).save();
  response.json(newDaily);
};

//////////////////////////////////////////////////////////////////////////
// Daily Update Page
export const getUpdateDaily = async (request: Request, response: Response) => {
  const dailyUpdate = await Daily.findById(request.params.id);
  response.render("edit", { dailyUpdate });
};

// Daily Update Page AJAX
export const postUpdateDaily = async (request: Request, response: Response) => {
  const { header, content, author, tags } = request.body;
  await Daily.findByIdAndUpdate(request.params.id, {
    header,
    content,
    author,
    tags,
  });
  response.json({ success: true });
};

//////////////////////////////////////////////////////////////////////////
// Daily Delete
export const postDeleteDaily = async (request: Request, response: Response) => {
  await Daily.findByIdAndDelete(request.params.id);
  response.json({ success: true });
};
