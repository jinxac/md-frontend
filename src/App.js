import React from "react";
import Home from "screens/Home";
import {ToastContainer} from "react-toastify";
import {
  Online,
  Offline
} from "react-detect-offline";


String.prototype.format = function () {
  let i = 0;
  const args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] !== "undefined" ? args[i++] : "";
  });
};

const App = () => {
  return (
    <div>
      <Online>
        <Home />
        <ToastContainer />
      </Online>
      <Offline>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            flexDirection: "column"
          }}
        >
          <h3>No Internet Connection</h3>
          <span>Please check your internet connection</span>
        </div>
      </Offline>
    </div>
  );
};

export default App;


