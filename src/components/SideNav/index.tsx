import React, { ReactElement, useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import ScrollContainer from "./ScrollContainer";
import ToggleButton from "./ToggleButton";
import Arrow from "./Arrow";
import ItemText from "./ItemText";
import { Row, Dropdown } from "../common";

import Algorithms from "../../model/Algorithms";

interface Props {
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: Function;
}

const supportingAlgorithms: Array<Algorithms> = [
  Algorithms.dfs,
  Algorithms.bfs,
  Algorithms.dijkstra,
  Algorithms.bellmanFord,
  Algorithms.prim,
];

const SideNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const setSelectedOption = (val: number) => {
    const newSelectedAlgorithm = supportingAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  return (
    <Container isVisible={isVisible}>
      <ScrollContainer>
        <ToggleButton isVisible={isVisible} onClick={() => toggleVisible()}>
          <Arrow isVisible={isVisible} />
        </ToggleButton>
        <ItemText>Algorithm</ItemText>
        <Row justifyContent="center">
          <Dropdown
            options={supportingAlgorithms}
            selectedOption={supportingAlgorithms.indexOf(
              props.selectedAlgorithm
            )}
            setSelectedOption={setSelectedOption}
          />
        </Row>
      </ScrollContainer>
    </Container>
  );
};

export default SideNav;
