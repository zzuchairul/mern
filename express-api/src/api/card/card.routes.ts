import CreateRoutes from "./create/create.routes";
import FindRoutes from "./find/find.route";
import { Router } from "express";

const router = Router();

// router "{url}/api/card/find"
router.use("/find", FindRoutes);

// router "{url}/api/card/create"
router.use("/create", CreateRoutes);

export default router;
