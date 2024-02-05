import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Desktop from './components/Desktop/Desktop';
import BarChart from './pages/barChart/barChart';
import PieChart from './pages/pieChart/pieChart';
import LineChart from './pages/lineChart/lineChart';
import ScatterPlot from './pages/scatterPlot/scatterPlot';
import DeskTopHome from './pages/DesktopHome/DesktopHome';
import Mobile from './components/Mobile/Mobile';
import MobileHome from './pages/MobileHome/MobileHome';

const Layout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  // Here Task 8 is done where we need to render different components for Mobile and Desktop
 // here it is performed using a mediaQuery to find the size of screen then rendering.
 // also created a two new Components for the MobileHome and DesktopHome components....
  return (
    <div>
      <Navbar />
      <Outlet>
        {isDesktop ? (
            <Desktop />
        ) : (
          <Mobile />
        )}
      </Outlet>
    </div>
  );
};

const mobileRouter = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <MobileHome />
      },
      {
        path:'/bar-chart/',
        element: <BarChart />
      },
      {
        path:'/pie-chart/',
        element: <PieChart />
      },
      {
        path:'/line-chart',
        element: <LineChart />
      },
      {
        path:"/scatter-plot",
        element: <ScatterPlot />
      }
    ],
  },

])
const deskTopRouter = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <DeskTopHome />
      },
      {
        path:'/bar-chart/',
        element: <BarChart />
      },
      {
        path:'/pie-chart/',
        element: <PieChart />
      },
      {
        path:'/line-chart',
        element: <LineChart />
      },
      {
        path:"/scatter-plot",
        element: <ScatterPlot />
      }
    ],
  },
]);

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <div>
    <RouterProvider router={isDesktop ? deskTopRouter : mobileRouter} />
  </div>
    
  );
}

export default App;
