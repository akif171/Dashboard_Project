import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Candidate from "./pages/Candidate/Candidate";
import AddCandidate from "./pages/Candidate/AddCandidate";

function App() {
  return (
    <div className="w-full flex">
      <Sidebar />

      <div className="w-full ml-52">
        <Navbar />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="candidate/add-candidate" element={<AddCandidate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
