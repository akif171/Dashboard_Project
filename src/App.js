import { Routes, Route, Navigate } from "react-router-dom";
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
import CandidMarketLayout from "./layouts/CandidMarketLayout";
import MarketingHistory from "./pages/Candidate/SubPages/MarketingHistory";
import MarketingList from "./pages/Candidate/SubPages/MarketingList";
import MarketingNotes from "./pages/Candidate/SubPages/MarketingNotes";
import MarketingJobs from "./pages/Candidate/SubPages/MarketingJobs";
import Login from "./pages/Login/Login";
import RootLayout from "./layouts/RootLayout";
import CheckAuth from "./components/CheckAuth";
import { useState } from "react";
import Redirector from "./components/Redirector";
import ErrorPage from "./pages/Error/ErrorPage";
import SignUp from "./pages/SignUp/SignUp";
import Subscribe from "./pages/Subscribe/Subscribe";
import SalesLayout from "./layouts/SalesLayout";
import JobLeads from "./pages/Sales/JobLeads/JobLeads";
import SalesInterviews from "./pages/Sales/Interviews/SalesInterviews";
import Vendors from "./pages/Sales/Vendors/Vendors";
import SalesContacts from "./pages/Sales/Contacts/SalesContacts";
import Technologies from "./pages/Sales/Technologies/Technologies";
import SalesTeams from "./pages/Sales/SalesTeams/SalesTeams";
import SalesProjects from "./pages/Sales/Projects/SalesProjects";
import VendorsLayout from "./layouts/VendorsLayout";
import Summary from "./pages/Sales/Vendors/Subpages/Summary";
import Details from "./pages/Sales/Vendors/Subpages/Details";
import Files from "./pages/Sales/Vendors/Subpages/Files";
import VendorSummaryLayout from "./layouts/VendorSummaryLayout";
import VendorDetailsLayout from "./layouts/VendorDetailsLayout";
import AccountInfo from "./pages/Sales/Vendors/Subpages/AccountInfo";
import Contacts from "./pages/Sales/Vendors/Subpages/Contacts";
import BillingAddress from "./pages/Sales/Vendors/Subpages/BillingAddress";
import CompanyProfile from "./pages/Sales/Vendors/Subpages/CompanyProfile";
import CompanyPreference from "./pages/Sales/Vendors/Subpages/CompanyPreference";
import BillingTerms from "./pages/Sales/Vendors/Subpages/BillingTerms";
import Description from "./pages/Sales/Vendors/Subpages/Description";
import Home from "./pages/Home/Home";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth isAuth={isAuth}>
              <Home />
            </CheckAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route
          element={
            <CheckAuth isAuth={isAuth}>
              <RootLayout />
            </CheckAuth>
          }
        >
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
            <Route path="marketing" element={<CandidMarketLayout />}>
              <Route index element={<MarketingHistory />} />
              <Route path="marketing-history" element={<MarketingHistory />} />
              <Route path="marketing-list" element={<MarketingList />} />
              <Route path="notes" element={<MarketingNotes />} />
              <Route path="jobs" element={<MarketingJobs />} />
            </Route>
            <Route path="interviews" element={<Interviews />} />
            <Route path="projects" element={<Projects />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          <Route path="sales" element={<SalesLayout />}>
            <Route path="job-leads" element={<JobLeads />} />
            <Route path="interviews" element={<SalesInterviews />} />
            <Route path="projects" element={<SalesProjects />} />
            <Route path="vendors" element={<Vendors />} />

            <Route path="vendors/new-vendor" element={<VendorsLayout />}>
              <Route path="summary" element={<VendorSummaryLayout />}>
                <Route index element={<AccountInfo />} />
                <Route path="account-info" element={<AccountInfo />} />
                <Route path="contact" element={<Contacts />} />
                <Route path="billing" element={<BillingAddress />} />
              </Route>
              <Route path="details" element={<VendorDetailsLayout />}>
                <Route index element={<CompanyProfile />} />
                <Route path="company-profile" element={<CompanyProfile />} />
                <Route
                  path="company-preference"
                  element={<CompanyPreference />}
                />
                <Route path="billing-terms" element={<BillingTerms />} />
                <Route path="description" element={<Description />} />
              </Route>
              <Route path="files" element={<Files />} />
            </Route>
            <Route path="contacts" element={<SalesContacts />} />
            <Route path="technologies" element={<Technologies />} />
            <Route path="sales-teams" element={<SalesTeams />} />
          </Route>
        </Route>
        {/* <Route path="/*" errorElement={<ErrorPage />} /> */}
      </Routes>
      {/* <RootLayout /> */}
    </>
  );
}

export default App;
