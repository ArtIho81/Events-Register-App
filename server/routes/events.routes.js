import { Router } from "express";
import eventsController from "../controllers/events.controller.js";

export const eventsRouter = Router();

eventsRouter.get('/events', eventsController.getEvents)