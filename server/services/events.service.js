import { Event } from "../db/models/index.js";

class EventService {
  getEvents = async (params) => {
    const { limit, page } = params;
    const offset = (page - 1) * limit;
    const { rows, count } = await Event.findAndCountAll({
      limit,
      offset,
    });
    return { events: rows, total: count };
  };

  getEventById = async (id) => {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error(`Event wasn't found`);
    }
    return event;
  };
}

export default new EventService();
