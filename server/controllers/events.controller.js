import eventsService from "../services/events.service.js";

class EventController {
  getEvents = async (req, res) => {
    try {
      const { query } = req;
      const { events, total } = await eventsService.getEvents(query);
      res.json({ events, total });
    }
    catch(e) {
      console.log(e.message)
    }
  };


}

export default new EventController();
