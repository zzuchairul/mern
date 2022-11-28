import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import Card from "../../../models/Card";

const router = Router();

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deleted = await Card.deleteOne({ _id: req.params.id });

    if (deleted.deletedCount === 0) {
      throw "Cannot find Card by given id or Card has been deleted";
    }

    res.status(200).json({
      message: "Card deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      message: error,
    });
  }
});

export default router;
