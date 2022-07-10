import React from "react";
import Chart from "chart.js";

export default function CardDonutChart() {
  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: [
          "Crops Harvested",
          "Crops Damaged",
          "Seeds Sprayed",
          "Pesticide Sprayed",
        ],
        datasets: [
          {
            data: [99, 166, 24, 64],
            backgroundColor: ["#34A853", "#FBBC05", "#D81935", "#1F4E9C"],
            hoverBackgroundColor: ["#34A853", "#FBBC05", "#D81935", "#1F4E9C"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
      },
    };
    var ctx = document.getElementById("donut-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Last Flight Data
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="donut-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
