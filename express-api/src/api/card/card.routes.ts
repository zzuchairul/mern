import CreateRoutes from "./create/create.routes";
import FindRoutes from "./find/find.routes";
import DeleteRoutes from "./delete/delete.routes";
import { Router } from "express";

const router = Router();

// router "{url}/api/card/"
router.use("/", FindRoutes, CreateRoutes, DeleteRoutes);

export default router;
