import React, { ReactElement, useState } from "react";
import SideNav from "../components/SideNav";

import Algorithms from "../model/Algorithms";

const Home: React.FC<{}> = (): ReactElement => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithms>(
    Algorithms.dfs
  );

  return (
    <>
      <SideNav
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      ></SideNav>
    </>
  );
};

export default Home;
