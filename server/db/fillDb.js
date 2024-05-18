import {
  Event,
  Participant,
  Source,
  EventParticipant,
} from "./models/index.js";
// await sequelize.authenticate();
// await sequelize.sync({ alter: true });

const events = [];
const p = [];
for (let i = 0; i < 10; i++) {
  events.push({
    title: `Event ${i + 1}`,
    description: "Random description",
    organizer: "abc",
    date: "25 Aug 2023",
  });
  p.push({ name: `name${i + 1}`, email: `email${i + 1}@qwe.rty` });
}

const fillEvents = async () => await Event.bulkCreate(events);

const fillP = async () => {
  await Participant.bulkCreate(p);
};
const fillSource = async () => {
  await Source.bulkCreate([
    { info_source: "Social media" },
    { info_source: "Friends" },
    { info_source: "Found myself" },
  ]);
};
const fillDB = async () => {
  await fillEvents();
  await fillP();
  fillSource();
};
// fillDB();
const a = async () => {
  const event = await Event.findByPk(1);
  const pp = await Participant.findByPk(5);
  const pq = await Participant.findByPk(7);
  //   await event.addParticipant(pp)
  //   await event.addParticipant(pq)
  await event.addParticipants([pp, pq]);
  console.log(event);
};
// a()

const b = async () => {
  const event = await Event.findByPk(1);
  const par = await event.getParticipants();
  const source = await Source.findByPk(2);
  await source.addS()
  // const ep = await Event.findAll({
  //   where: { id: 1 },
  //   include: Participant,
  // });
  // ep.forEach(async (item) => await item.update({ sourceId: source.id }));

  console.log(par);
};
b();
