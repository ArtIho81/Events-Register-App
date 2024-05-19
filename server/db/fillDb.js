import { Event, Participant, Source } from "./models/index.js";
import { posts } from "./events.js";
import { albums } from "./albums.js";

const fillSources = async () => {
  const sources = [{info_source: 'Social media'}, {info_source: 'Friends'}, {info_source: 'Found myself'}]
await Source.bulkCreate(sources)
}

const fillEvents = async () => {
  const events = posts.map((post, index) => {
    const event = {
      title: post.title,
      description: post.body,
      organizer: albums[index].title,
      date: `01.06.2024` 
    };
    return event;
  });
  await Event.bulkCreate(events);
  console.log(events)
};
// fillEvents();
fillSources()
