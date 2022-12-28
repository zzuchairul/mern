import { Router } from "express";

import NoteRoutes from "./note/note.routes";

const router = Router();

// route "{url}/api/note"
router.use("/note", NoteRoutes);

export default router;
