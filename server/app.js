import express, { json } from "express";
import cors from "cors";
import { eventsRouter } from "./routes/events.routes.js";
import { participantsRouter } from "./routes/participants.routes.js";

const PORT = 3001;

const app = express();
app.use(json());
app.use(cors());

app.use("/api", eventsRouter);
app.use("/api", participantsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
