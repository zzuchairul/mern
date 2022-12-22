import { Request, Response, Router } from "express";
import Card from "../../../models/Card";

const router = Router();

/**
 * Create card
 * METHOD: POST
 * route "{url}/api/card/create"
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const data = new Card(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default router;
