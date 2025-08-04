import React from "react";
import { Progress } from "./components/Progress/Progress";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Wrapped MUI Progress Bar</h2>
      <Progress value={50} variant="determinate" />
    </div>
  );
}

export default App;
