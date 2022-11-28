import { Router } from "express";

import CardRoutes from "./card/card.routes";

const router = Router();

// route "{url}/api/card"
router.use("/card", CardRoutes);

export default router;
