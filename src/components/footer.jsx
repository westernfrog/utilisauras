import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid">
        <p className="col-md-4 mb-0">&copy; 2021 Text Utility, Inc</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2087/2087807.png"
          alt="Logo of Text Utility"
          width="30"
          height="24"
        />
      </footer>
    </div>
  );
}
