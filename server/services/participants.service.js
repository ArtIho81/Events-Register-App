import { Participant } from "../db/models/index.js";
import eventsService from "../services/events.service.js";
import sourcesService from "./sources.service.js";

class ParticipantsService {
  getEventParticipants = async (eventId) => {
    const event = await eventsService.getEventById(eventId);
    const participants = await event.getParticipants();
    return { event: event.title, participants };
  };

  registerParticipantToEvent = async (eventId, candidate) => {
    const event = await eventsService.getEventById(eventId);
    const participant = await this.defineParticipant(event, candidate);
    await event.addParticipant(participant);
    await sourcesService.saveSourceToEventAndParticipant(
      candidate.source,
      eventId,
      participant.id
    );
    return participant;
  };

  getParticipantByEmail = async (email) => {
    const participant = await Participant.findOne({
      where: { email },
    });
    return participant;
  };

  defineParticipant = async (event, candidate) => {
    const errorMessages = {
      alreadyRegestered: `Participant ${candidate.email} already registered to this event`,
      anotherName: `Participant ${candidate.email} registered in system with another name`,
    };
    const participantInDb = await this.getParticipantByEmail(candidate.email);
    if (!participantInDb) {
      const participant = await Participant.create(candidate);
      return participant;
    }
    if (participantInDb.name !== candidate.name) {
      throw new Error(errorMessages.anotherName);
    }
    const hasEventParticipant = await participantInDb.hasEvent(event);
    if (hasEventParticipant) {
      throw new Error(errorMessages.alreadyRegestered);
    }
    return participantInDb;
  };
}

export default new ParticipantsService();
