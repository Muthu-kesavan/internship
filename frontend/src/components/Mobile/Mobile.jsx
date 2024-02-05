import React from 'react'
import MobileHome from '../../pages/MobileHome/MobileHome'
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import ScatterPlot from '../ScatterPlot/ScatterPlot'
import BubbleChart from '../BubbleChart/BubbleChart'
const Mobile = () => {
  return (
    <div>
      <MobileHome />
      <BarChart />
      <PieChart />
      <ScatterPlot />
      <BubbleChart />
    </div>
   
  )
}

export default Mobile