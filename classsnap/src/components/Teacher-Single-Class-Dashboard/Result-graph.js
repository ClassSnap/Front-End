import React, { useState, useEffect } from "react";
var CanvasJSReact = require("../../canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ResultGraph = props => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);

  useEffect(() => {
    setOne(props.oneStar.length);
    setTwo(props.twoStar.length);
    setThree(props.threeStar.length);
    setFour(props.fourStar.length);
    setFive(props.fiveStar.length);
  }, []);

  const options = {
    title: { text: "Parent Rating Bar Chart" },
    data: {
      type: "column",
      dataPoints: [
        { label: "1", y: one },
        { label: "2", y: two },
        { label: "3", y: three },
        { label: "4", y: four },
        { label: "5", y: five }
      ]
    }
  };
  return (
    <div className="graph">
      <CanvasJSChart options={options} />
    </div>
  );
};

// class ResultGraph extends Component {
//   render() {
//     const options = {
//       title: { text: "Parent Rating Bar Chart" },
//       data: {
//         type: "column",
//         dataPoints: [
//           { label: "1", y: 10 },
//           { label: "2", y: 10 },
//           { label: "3", y: 10 },
//           { label: "4", y: 10 },
//           { label: "5", y: 10 }
//         ]
//       }
//     };
//     return (
//       <div className="graph">
//         <CanvasJSChart options={options} />
//       </div>
//     );
//   }
// }

export default ResultGraph;
