import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bars } from 'react-loader-spinner';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../Loader/Loader.css";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const BarChart = () => {
  const [data, setData] = useState([]);
// here the task 3 is done where we need to Load API data in a component only once 
// this is done here by using useEffect hook with the empty dependency array....
// All the Components on this application follows the same approach.....
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios // link own link of the backend to get the data from our MongoDB .... 
      .get("https://connect1-5xyo.onrender.com/api/data/getdata")
      .then((res) => {
        setData(res.data.slice(0, 30)); 
        console.log("Fetched Data:", res.data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  };

  const labels = data.map((el) => el.source);

  const barChartData = {
    labels: labels.slice(0, 30),
    datasets: [
      {
        label: "Based on intensity of Topic",
        backgroundColor: "#22c55e",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "#4ade80",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: data.map((el) => el.intensity).slice(0, 30), 
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div style={{ width: "70%", margin: "auto",  marginTop: "60px"  }} >
      {data.length > 0 ? (
        <Bar data={barChartData} options={options} />
      ) : (
        <div className="loading-spinner-container">
        <Bars
  height="80"
  width="80"
  color="#333333"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
      </div>
      )}
    </div>
  );
};

export default BarChart;