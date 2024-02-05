import React from 'react'
import MobileHome from '../../pages/MobileHome/MobileHome'
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import ScatterPlot from '../ScatterPlot/ScatterPlot'
import LineChart from '../LineChart/LineChart'
const Mobile = () => {
  return (
    <div>
      <MobileHome />
      <BarChart />
      <PieChart />
      <ScatterPlot />
      <LineChart />
    </div>
   
  )
}

export default Mobile