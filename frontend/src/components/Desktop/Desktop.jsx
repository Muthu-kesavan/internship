import React from 'react'
import DesktopHome from '../../pages/DesktopHome/DesktopHome'
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import ScatterPlot from '../ScatterPlot/ScatterPlot'
import LineChart from '../LineChart/LineChart'
const Desktop = () => {
  return (
    <div>
      <DesktopHome />
      <BarChart />
      <PieChart />
      <ScatterPlot />
      <LineChart />
    </div>
  )
}

export default Desktop