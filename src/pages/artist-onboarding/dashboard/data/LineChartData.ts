export const LineData = {
  labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
  datasets: [
    {
      data: [105, 390, 500, 100, 560, 150],
      fill: false,
      borderColor: "#6200EE",
      tension: 0.1,
      pointRadius: 0,
    },
  ],
};

export const LineOptions: any = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      position: "right",
      beginAtZero: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};
