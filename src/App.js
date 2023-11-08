import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Candidate from "./pages/Candidate";
import AddCandidate from "./pages/Candidate/AddCandidate";
import Personal from "./pages/Candidate/Personal";
import CandidateLayout from "./layouts/CandidateLayout";
import CandidPersonalLayout from "./layouts/CandidPersonalLayout";
import Notes from "./pages/Candidate/Notes";
import Marketing from "./pages/Candidate/Marketing";
import Interviews from "./pages/Candidate/Interviews";
import Projects from "./pages/Candidate/Projects";
import Trainings from "./pages/Candidate/Trainings";
import Documents from "./pages/Candidate/Documents";
import Basic from "./pages/Candidate/SubPages/Basic";
import Professional from "./pages/Candidate/SubPages/Professional";
import Profile from "./pages/Candidate/SubPages/Profile";
import EmergencyContacts from "./pages/Candidate/SubPages/EmergencyContacts";

function App() {
  return (
    <div className="w-full flex ">
      <Sidebar />

      <div className="w-full ml-52">
        <Navbar />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="candidate/add-candidate" element={<CandidateLayout />}>
            <Route path="personal" element={<CandidPersonalLayout />}>
              <Route index element={<Basic />} />
              <Route path="basic" element={<Basic />} />
              <Route path="professional" element={<Professional />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="emergency-contacts"
                element={<EmergencyContacts />}
              />
            </Route>
            <Route path="notes" element={<Notes />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="interviews" element={<Interviews />} />
            <Route path="projects" element={<Projects />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="documents" element={<Documents />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
