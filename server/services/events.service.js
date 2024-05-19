import { Event } from "../db/models/index.js";

class EventService {
  getEvents = async (params) => {
    const { limit, page, sortBy, sortOrder } = params;
    const offset = (page - 1) * limit;
    const sortField = {
      Default: "createdAt",
      Event: "title",
      Organizer: "organizer",
      Date: "date",
    };

    const { rows, count } = await Event.findAndCountAll({
      order: [[sortField[sortBy], sortOrder]],
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
