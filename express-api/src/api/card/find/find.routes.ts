import { Router, Request, Response } from "express";

import Card from "../../../models/Card";

const router = Router();

/**
 * get all cards
 * METHOD: GET
 * route "{url}/api/card/find"
 */
router.get("/", async (_req: Request, res: Response) => {
  const data = await Card.find();
  res.status(200).json(data);
});

/**
 * get card by id
 * METHOD: GET
 * route "{url}/api/card/find/:id"
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const data = await Card.findById(req.params.id);

    if (data == null) {
      throw "Cannot find Card with given id";
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({
      message: error,
    });
  }
});

export default router;
