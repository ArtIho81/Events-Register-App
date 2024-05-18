import { Router } from "express";
import participantsController from "../controllers/participants.controller.js";

export const participantsRouter = Router();

participantsRouter.get(
  "/participants/:eventId",
  participantsController.getParticipants
);

participantsRouter.post(
  "/participants/:eventId",
  participantsController.registerParticipant
);
