import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./presentation/pages/main/Page";
import Planet from "./presentation/pages/planet/Page";
import SolarSystem from "./presentation/pages/solarSystem/Page";
import Transition from "./presentation/pages/transition/Page";
import Constellation from "./presentation/pages/constellation/Page";
import Search from "./presentation/pages/search/Page";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Main />
            </motion.div>
          }
        />
        <Route
          path="/search"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search />
            </motion.div>
          }
        />
        <Route
          path="/transition"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Transition />
            </motion.div>
          }
        />
        <Route
          path="/planet/:name"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Planet />
            </motion.div>
          }
        />
        <Route
          path="/constellation/:name"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Constellation />
            </motion.div>
          }
        />
        <Route
          path="/solarsystem"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SolarSystem />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
