import participantsService from "../services/participants.service.js";

class ParticipantsController {
  getParticipants = async (req, res) => {
    const { eventId } = req.params;
    try {
      const eventParticipants = await participantsService.getEventParticipants(
        eventId
      );
      res.status(200).json(eventParticipants);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  registerParticipant = async (req, res) => {
    const { eventId } = req.params;
    const person = req.body;
    try {
      const participant = await participantsService.registerParticipantToEvent(
        eventId,
        person
      );
      res.status(200).json(participant);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };
}

export default new ParticipantsController();
