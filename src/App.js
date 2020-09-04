import React from "react";
import { HashRouter as Router } from "react-router-dom";

import MainRoutes from "./Routes";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainRoutes />
    </Router>
  );
}

export default App;
