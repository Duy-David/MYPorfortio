import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import MyWork from "./component/Mywork/MyWork";
import Contract from "./component/Contract/Contract";
import Footer from "./component/Footer/Footer";
import MyForm from "./test/MyForm";
// import "./index.scss"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork/>
      <Contract/>
      <Footer/>
    
    </div>
  );
};

export default App;






