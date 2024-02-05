import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Chart from 'chart.js/auto';
import "chartjs-adapter-date-fns"; 
import "../Loader/Loader.css";
const BubbleChart = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/data/getdata")
      .then((res) => {
        setData(res.data.slice(0, 100));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    renderChart();

    return () => {
      destroyChart();
    };
  }, [data]);

  const renderChart = () => {
    const ctx = document.getElementById("bubble-chart");
    if (ctx) {
      destroyChart(); 

      const bubbleChart = new Chart(ctx, {
        type: "bubble",
        data: {
          datasets: [
            {
              label: "Based on the Intensity and Relevance",
              data: data.map((entry) => ({
                x: new Date(entry.added),
                y: entry.intensity,
                r: entry.relevance,
              })),
              backgroundColor: "#4338ca",
              hoverBackgroundColor: "#5FBDFF",
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current = bubbleChart;
    }
  };

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "60px" }}>
      {
        data.length > 0 ? (
          <canvas id="bubble-chart"></canvas>
        ) :(
          <div className="loading-spinner-container">
        <Bars height={80} width={80} color="#333333" ariaLabel="circles-loading" visible={true} />
      </div>
        )
      }
      
    </div>
  );
};

export default BubbleChart;