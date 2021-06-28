import React, { useContext } from "react";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
import Layout from "../../components/Layout/Layout";
import SortingVisualBox from "../../components/VisualBox/SortingVisualBox";
import PathFinding from "../PathFinding/PathFinding";

const Home = () => {
  const display =
    useContext(GlobalStateContext).pageType === "A" ? (
      <SortingVisualBox />
    ) : (
      <PathFinding />
    );

  return <Layout>{display}</Layout>;
};
export default Home;
