import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BarChart from './components/BarChart/BarChart';
import PieChart from './components/PieChart/PieChart';
import BubbleChart from './components/BubbleChart/BubbleChart';
import Home from './pages/Home/Home';

const Layout=()=> {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Home />
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
        path:'/bubble-chart',
        element: <BubbleChart />
      }
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;