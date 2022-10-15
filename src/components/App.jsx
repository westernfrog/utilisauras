import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TextArea from "./TextArea";
import Weather from "./Weather";
import JSON from "./Json";
import Title from "./Title";
import PDF2Word from "./Pdf2Word";
import Word2PDF from "./Word2Pdf";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Router>
          <Header />
          <Title />
          <Routes>
            <Route path="/utilisauras/pdf2word" element={<PDF2Word />} />
            <Route path="/utilisauras/word2pdf" element={<Word2PDF />} />
            <Route path="/utilisauras/clouds" element={<Weather />} />
            <Route path="/utilisauras/text" element={<TextArea />} />
            <Route path="/utilisauras/json" element={<JSON />} />
          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
