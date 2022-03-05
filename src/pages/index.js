import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Site = () => {
  return (
    <div className="Site">
      <Navbar />
      <main>
        <Header />
      </main>
      <Content />
      <Footer />
    </div>
  )
}

export default Site;