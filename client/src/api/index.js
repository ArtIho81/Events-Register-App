import { endPoints, serverURL } from "../config";

export const registerParticipant = async (participant, eventId) => {
    return await fetch(`${serverURL}${endPoints.getParticipants}/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participant),
      });
}