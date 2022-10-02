import React from "react";
import Footer from "./footer";
import Header from "./header";
import TextArea from "./TextArea";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Header />
        <TextArea title="TextArea" preview="Preview" />
        <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
