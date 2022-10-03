import React from "react";
import Footer from "./footer";
import Header from "./header";
import TextArea from "./TextArea";
import Time from "./Time";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/time" element={<Time />} />
            <Route
              path="/textutility"
              element={<TextArea title="TextArea" preview="Preview" />}
            />
          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
