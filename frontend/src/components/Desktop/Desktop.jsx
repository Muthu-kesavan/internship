import React from 'react'
import DesktopHome from '../../pages/DesktopHome/DesktopHome'
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import ScatterPlot from '../ScatterPlot/ScatterPlot'
import BubbleChart from '../BubbleChart/BubbleChart'
const Desktop = () => {
  return (
    <div>
      <DesktopHome />
      <BarChart />
      <PieChart />
      <ScatterPlot />
      <BubbleChart />
    </div>
  )
}

export default Desktop