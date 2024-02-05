import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from 'chart.js/auto';
import { Bars } from "react-loader-spinner";
import "../Loader/Loader.css";
const ScatterPlot = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/data/getdata")
      .then((res) => {
        setData(res.data.slice(0, 80));
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
    const ctx = document.getElementById("scatter-plot");
    if (ctx) {
      destroyChart();

      const scatterChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Between Intensity & Relevance",
              data: data.map((entry) => ({
                x: entry.intensity,
                y: entry.relevance,
                r: entry.likelihood * 5, 
              })),
              backgroundColor: "#e11d48",
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
            y: {
              type: "linear",
              position: "left",
            },
          },
        },
      });

      chartRef.current = scatterChart;
    }
  };

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };

  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "60px" }}>
      { data.length > 0 ? (
        <canvas id="scatter-plot"></canvas>

      ):(
        <div className="loading-spinner-container">
        <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
      </div>
      )

      }
      
    </div>
  );
};

export default ScatterPlot;