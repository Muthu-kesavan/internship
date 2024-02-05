import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bars } from 'react-loader-spinner';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../Loader/Loader.css";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const BarChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        setEmployeeData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const employeeNames = employeeData.map(employee => employee.employee_name);
  const employeeSalaries = employeeData.map(employee => employee.employee_salary);

  const barChartData = {
    labels: employeeNames,
    datasets: [
      {
        label: 'Employee Salary',
        backgroundColor: '#22c55e',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: '#4ade80',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: employeeSalaries,
      },
    ],
  };

  return (
    <div style={{width:"70%", margin:"auto", marginTop:"60px"}}>
      <h2>Employee Salary Bar Chart</h2>
      {employeeData.length > 0 ? (
            <Bar data={barChartData} />
      ) : (
        <div className="loading-spinner-container">
          <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
          </div> 
      )}
    </div>
  );
};

export default BarChart;