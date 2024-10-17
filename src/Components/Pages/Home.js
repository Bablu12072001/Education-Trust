import React from "react";
import First from "./FirstPage/First";
import Card from "./FirstPage/Card";
import Carding from "./FirstPage/Carding";
import Blog from "./FirstPage/Blog";
import Lastpage from "./FirstPage/Lastpage";
import Footer from "../Footer";
import Heading from "../Heading";

function Home() {
  return (
    <div>
      <Heading />
      <First />
      <Card />
      <Carding />
      <Blog />
      <Lastpage />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
