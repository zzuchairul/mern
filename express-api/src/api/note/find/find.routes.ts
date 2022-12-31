import { Router, Request, Response } from "express";

import Note from "../../../models/Note";

const router = Router();

/**
 * get note by title
 * METHOD: GET
 * route "{url}/api/note/find?"
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const { title } = req.query;
    const titleRgx = title ? ".*" + title + ".*" : "";

    const data = await Note.find({
      title: {
        $regex: titleRgx,
        $options: "i",
      },
    });

    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({
      message: error,
    });
  }
});

/**
 * get note by id
 * METHOD: GET
 * route "{url}/api/note/find/:id"
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const data = await Note.findById(req.params.id);

    if (data == null) {
      throw "Cannot find Note with given id";
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({
      message: error,
    });
  }
});

export default router;
