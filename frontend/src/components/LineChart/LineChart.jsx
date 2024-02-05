import React, {useEffect, useState, useRef} from 'react'
import axios from "axios";
import {Chart} from 'chart.js';
import { Bars } from 'react-loader-spinner';
import "../Loader/Loader.css";
const LineChart = () => {
 
  const [employeeData, setEmployeeData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then((res) => {
        setEmployeeData(res.data.data.slice(0, 80));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    renderLineChart();

    return () => {
      destroyLineChart();
    };
  }, [employeeData]);

  const renderLineChart = () => {
    const ctx = document.getElementById('line-chart');
    if (ctx) {
      destroyLineChart();

      const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: employeeData.map((employee) => employee.employee_name),
          datasets: [
            {
              label: 'Employee Salary Trend',
              data: employeeData.map((employee) => employee.employee_salary),
              borderColor: '#e11d48',
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category',
              position: 'bottom',
              title: {
                display: true,
                text: 'Employee Name',
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Employee Salary',
              },
            },
          },
        },
      });

      chartRef.current = lineChart;
    }
  };

  const destroyLineChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };

  return (
    <div style={{ width: '70%', margin: 'auto', marginTop: '60px' }}>
      {employeeData.length > 0 ? (
        <canvas id="line-chart"></canvas>
      ) : (
          <div className="loading-spinner-container">
          <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
          </div> 
      )}
    </div>
  );
};

export default LineChart