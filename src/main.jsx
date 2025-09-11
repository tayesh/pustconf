import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Dates from './Components/Dates/Dates';
import SubmissionPage from './Components/Submission/SubmissionPage';
import Contact from './Components/Contact/Contact';
import CallPaper from './Components/CallPaper/CallPaper';
import Schedule from './Components/Schedule/Schedule';
import Day2 from './Components/Schedule/Day2';
import Day1 from './Components/Schedule/Day1';
import TouristSpot from './Components/Others/TouristSpot';
import Accomodation from './Components/Others/Accomodation';
import Committees from './Components/Committees/Committees';
import Tracks from './Components/Home/Tracks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/important-dates",
        element: <Dates></Dates>
      },
      
      {
        path: "/submission",
        element: <SubmissionPage></SubmissionPage>
      },
      {
        path: "/submission-important-dates",
        element: <SubmissionPage></SubmissionPage>
      },
      {
        path: "/download-template",
        element: <SubmissionPage></SubmissionPage>
      },
      {
        path: "/paper-submission-guidelines",
        element: <SubmissionPage></SubmissionPage>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:"/committees",
        element:<Committees></Committees>
      },
      {
        path: "/call-for-paper",
        element: <CallPaper></CallPaper>
      },
      {
        path:"/scopes",
        element:<Tracks></Tracks>
      },
      {
        path:"/accomodation",
        element: <Accomodation></Accomodation>
      },
      {
        path:"/tourists-attraction",
        element:<TouristSpot></TouristSpot>
      },
      
      {
        path: "/schedule",
        element: <Schedule></Schedule>,
        children: [
          {
            index: true,
            element: <Navigate to="day1" replace />

          },
          {
            path: "day1",
            element: <Day1></Day1>
          },
          {
            path: "day2",
            element: <Day2></Day2>
          },

        ]
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
