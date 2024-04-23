import React from "react";
import Sidebar from "../sidebar/sidebar";
import Topbar from "../topbar/topbar";
import dashStyle from "./home.css";

function Home() {
  return (
    <body>
      <div className={dashStyle.main}>
        <Sidebar />
        <div className={dashStyle.content}>
          <Topbar />
          <div className={dashStyle.pageContent}>Dashboard Page</div>
          </div>
      </div>
      </body>
  );
}
export default Home;
