import { Request, Response, Router } from "express";
import Note from "../../../models/Note";

const router = Router();

/**
 * Create note
 * METHOD: POST
 * route "{url}/api/note"
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const data = new Note(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default router;
