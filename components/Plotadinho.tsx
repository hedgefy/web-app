import Plot from "react-plotly.js";

function Plotadinho({ data }) {
  return (
    <Plot
      data={[
        {
          x: data?.ds || [],
          y: data?.y || [],
          type: "scatter",
          mode: "lines",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 500, height: 500, title: data.theta }}
    />
  );
}

export default Plotadinho;
