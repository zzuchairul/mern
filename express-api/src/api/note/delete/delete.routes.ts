import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import Note from "../../../models/Note";

const router = Router();

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deleted = await Note.deleteOne({ _id: req.params.id });

    if (deleted.deletedCount === 0) {
      throw "Cannot find Note by given id or Note has been deleted";
    }

    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error,
    });
  }
});

export default router;
