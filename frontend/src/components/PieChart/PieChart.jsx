import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Bars } from "react-loader-spinner";
import "../Loader/Loader.css";
const PieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/data/getdata")
      .then((res) => {
        setData(res.data.slice(0, 52));
      })
      .catch((err) => console.log(err));
  };

  const uniqueTopics = Array.from(new Set(data.map((entry) => entry.topic)));

  const pieChartData = {
    labels: uniqueTopics,
    datasets: [
      {
        data: uniqueTopics.map((topic) =>
          data.filter((entry) => entry.topic === topic).length
        ),
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
        ],
      },
    ],
  };
  const center = {
    textAlign: 'center',

  }

  return (
    <div style={{ width: "50%", margin: "auto", marginTop: "60px" }}>
      <h3 style={center}>Based On Most Speaked Topic</h3>
      {data.length > 0 ? (
        <Pie
          data={pieChartData}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "right", 
              },
            },
          }}
        />
      ) : (
        <div className="loading-spinner-container">
        <Bars height={80} width={80} color="#333333" ariaLabel="loading" visible={true} />
      </div>
      )}
    </div>
  );
};

export default PieChart;