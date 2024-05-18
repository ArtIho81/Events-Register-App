import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EventsBoardPage } from "./pages/EventsBoardPage";
import { EventRegistrationPage } from "./pages/EventRegistrationPage";
import { EventParticipantsPage } from "./pages/EventParticipantsPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<EventsBoardPage />} />
        <Route
          path="/registration/:eventId"
          element={<EventRegistrationPage />}
        />
        <Route
          path="/participants/:eventId"
          element={<EventParticipantsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
