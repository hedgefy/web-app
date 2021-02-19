import Plot from "react-plotly.js";

function Plotadinho({ data }) {
  return (
    <Plot
      data={[
        {
          x: data?.ds || [],
          y: data?.y || [],
          type: "scatter",
          name: "Price",
        },
        {
          x: data?.ds || [],
          y: data?.yhat || [],
          type: "scatter",
          name: "Hat",
        },
        {
          x: data?.ds || [],
          y: data?.trend || [],
          type: "scatter",
          name: "Trend",
        },
        {
          x: data?.ds || [],
          y: data?.yhat_upper || [],
          type: "scatter",
          name: "Upper Hat",
          fill: "tonexty",
          fillcolor: "rgba(0,201,253,.21)",
          mode: "none",
        },
        {
          x: data?.ds || [],
          y: data?.yhat_lower || [],
          name: "Lower Hat",
          type: "scatter",
          fill: "tonexty",
          fillcolor: "rgba(252,201,5,.05)",
          mode: "none",
        },
      ]}
      layout={{
        width: 500,
        height: 500,
        title: data.theta,
        xaxis: { type: "date" },
        yaxis: {
          title: "Price (USD)",
          side: "right",
          showgrid: "true",
          gridcolor: "rgba(255,255,255,.05)",
        },
        legend: {
          orientation: "h",
        },
        font: { color: "rgb(255,255,255)" },
        plot_bgcolor: "#2d2929",
        paper_bgcolor: "#2d2929",
      }}
    />
  );
}

export default Plotadinho;
