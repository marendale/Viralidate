/* eslint-disable no-unused-vars */
import React from 'react';
import PatientPortal from './pages/patientPortal/PatientPortal';
import AdminPortal from './pages/adminPortal/AdminPortal';
import AvailabilityManager from './pages/availabilityManager/AvailabilityManager'; // Adjust the import path as necessary
import Questionnaire from './pages/questionnaire/Questionnaire';
import AppointmentSelection from './pages/appointmentSelection/AppointmentSelection';
import Frontpage from './pages/frontpage/Frontpage';
import { AuthContext } from './components/context/AuthContext';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Frontpage/>
    },
    {
      path:"/patientportal",
      element:<PrivateRoute component = {<PatientPortal />} allowed={['patient']} />
    },
    {
      path:"/adminportal",
      element:<PrivateRoute component = {<AdminPortal />} allowed={['admin']} />
    },
    {
      path:"/availability-manager",
      element:<PrivateRoute component = {<AvailabilityManager />} allowed={['admin']} />
    },    
    {
      path:"/questionnaire",
      element:<PrivateRoute component = {<Questionnaire />} allowed={['patient']}/>
    },
    {
      path:"/appointment-selection",
      element:<PrivateRoute component = {<AppointmentSelection />} allowed={['patient']}/>
    },
  ])


  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  );
};

export default App;