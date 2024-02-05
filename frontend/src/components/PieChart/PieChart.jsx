import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Bars } from "react-loader-spinner";
import "../Loader/Loader.css";
const PieChart = () => {
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
  const employeeAges = employeeData.map(employee => employee.employee_age);

  const pieChartData = {
    labels: employeeNames,
    datasets: [
      {
        data: employeeAges,
        backgroundColor: [
          '#A569BD',
          '#DFFF00',
          '#6495ED',
          '#34495E',
          '#81C784',
          '#D81B60',
          '#03A9F4',
          '#000099',
          '#FFFF66',
          '#D68910',
          '#85929E',
          '#B71C1C',
          '#884EA0',
          '#f6d7b0',
          '#ff8585',
          '#1d2341',
          '#66ff66',
          '#ff3333',
          '#94b8b8',
          '#df9f9f',
          '#2d5986',
          '#ffb3ec',
          '#0000cc',
          '#ffbf00',
          '#8585ad',
          '#79d279',
        ],
        
      },
    ],
  };

  return (
    <div style={{width:"50%", margin: "auto", marginTop:"60px"}}>
      <h2>Employee Age Pie Chart</h2>
      {employeeData.length > 0 ? (
        <Pie data={pieChartData} />
      ) : ( 
        <div className="loading-spinner-container">
          <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
          </div> 
      )}; 
    </div>
  );
};
export default PieChart;