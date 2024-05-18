import sequelize from "../sequelize-instance.js";
import { Participant } from "./Participant.model.js";
import { Event } from "./Event.model.js";
import { Source } from "./Source.model.js";
import { DataTypes } from "sequelize";

const EventParticipant = sequelize.define("event_participant", {
  eventId: {
    type: DataTypes.INTEGER,
  },
  participantId: {
    type: DataTypes.INTEGER,
  },
  sourceId: {
    type: DataTypes.INTEGER,
  },
});

Participant.belongsToMany(Event, {
  through: EventParticipant,
  foreignKey: "participantId",
});
Event.belongsToMany(Participant, {
  through: EventParticipant,
  foreignKey: "eventId",
});

Source.hasMany(EventParticipant, { foreignKey: "sourceId" });
EventParticipant.belongsTo(Source);

await sequelize.sync();

export { Participant, Event, Source, EventParticipant };
