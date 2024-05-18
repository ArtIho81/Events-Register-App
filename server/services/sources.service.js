import { EventParticipant, Source } from "../db/models/index.js";

class SourcesService {
  getSourceId = async (source) => {
    const { id } = await Source.findOne({
      where: { info_source: source },
    });
    if (!id) {
      throw new Error(`Source wasn't found`);
    }
    return id;
  };

  saveSourceToEventAndParticipant = async (source, eventId, participantId) => {
    const sourceId = await this.getSourceId(source);
    await EventParticipant.update(
      { sourceId },
      { where: { eventId, participantId } }
    );
  };
}

export default new SourcesService();
