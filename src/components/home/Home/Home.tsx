import React, { useState } from "react";

import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import Navbar from "../../global/Navbar/Navbar";
import Footer from "../../global/Footer/Footer";
import { motion, useTransform, useMotionValue } from "framer-motion";

const Home: React.FC<Props> = (props) => {
  const [active, setActive] = useState(0);

  return (
    <Styles className="Home">
      <header className="Home__header">
        <Navbar />
      </header>
      <main className="Home__main">
        <div className="Home__boxContainer">
          {Array.from(new Array(16)).map((_, index) => (
            <motion.div
              className={
                active === index ? "Home__box Home__box--active" : "Home__box"
              }
              key={index}
              onClick={() => setActive(index)}
              initial={{ scale: 0 }}
              animate={{
                rotate: 180,
                scale: 1,
                backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
              }}
              drag="x"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            />
          ))}
        </div>
      </main>
      <footer className="Home__footer">
        <Footer />
      </footer>
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
