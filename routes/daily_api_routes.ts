// İmport Router
import { Router } from "express";

// Daily Controller
import {
  getListDaily,
  getCreateDaily,
  postCreateDaily,
  getUpdateDaily,
  postUpdateDaily,
  postDeleteDaily,
} from "../controllers/dailyController";

// Router
const router = Router();

///////////////////////////////////////////////////////////////////
// LIST (DAILY)
router.get("/list", getListDaily);

///////////////////////////////////////////////////////////////////
// CREATE (DAILY)
router.get("/create", getCreateDaily);
router.post("/create", postCreateDaily);

///////////////////////////////////////////////////////////////////
// UPDATE
router.get("/edit/:id", getUpdateDaily);
router.post("/edit/:id", postUpdateDaily);

///////////////////////////////////////////////////////////////////
// DELETE
router.post("/delete/:id", postDeleteDaily);

// EXPORT ROUTER
export default router;
