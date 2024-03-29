import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from 'chart.js/auto';
import { Bars } from "react-loader-spinner";
import "../Loader/Loader.css";
const ScatterPlot = () => {
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
    renderScatterPlot();

    return () => {
      destroyScatterPlot();
    };
  }, [employeeData]);

  const renderScatterPlot = () => {
    const ctx = document.getElementById('scatter-plot');
    if (ctx) {
      destroyScatterPlot();

      const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Employee Age vs Salary',
              data: employeeData.map((employee) => ({
                x: employee.employee_age,
                y: employee.employee_salary,
                r: 5, 
              })),
              backgroundColor: '#e11d48',
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Employee Age',
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

      chartRef.current = scatterChart;
    }
  };

  const destroyScatterPlot = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };

  return (
    <div style={{ width: '70%', margin: 'auto', marginTop: '60px' }}>
      {employeeData.length > 0 ? (
        <canvas id="scatter-plot"></canvas>
      ) : (
        <div className="loading-spinner-container">
          <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
          </div> 
      )}
    </div>
  );
};
  
export default ScatterPlot;