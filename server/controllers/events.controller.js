import eventsService from "../services/events.service.js";

class EventController {
  getEvents = async (req, res) => {
    const { query } = req;
    const { events, total } = await eventsService.getEvents(query);
    res.json({ events, total });
  };
}

export default new EventController();
