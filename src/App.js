import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Kyc from './pages/Kyc';
import Beneficiary from './pages/Beneficiary';
import BankingDetails from './pages/BankingDetails';
import IncomeStreams from './pages/IncomeStreams';
import Payments from './pages/Payments';
import Statements from './pages/Statements';
import Contact from './pages/Contact';
import Protected from './components/Protected';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  //Subroutes
  {
    path: "/dashboard",
    element: <Protected Component={Dashboard} />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "beneficiary",
        element: <Beneficiary />,
      },
      {
        path: "kyc",
        element: <Kyc />,
      },
      {
        path: "banking-details",
        element: <BankingDetails />,
      },
      {
        path: "income-streams",
        element: <IncomeStreams />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "statement",
        element: <Statements />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
