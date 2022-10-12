import React, { ReactElement, useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import ScrollContainer from "./ScrollContainer";
import ToggleButton from "./ToggleButton";
import Arrow from "./Arrow";
import ItemText from "./ItemText";
import { Row } from "../common";

const SideNav: React.FC<{}> = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container isVisible={isVisible}>
      <ScrollContainer>
        <ToggleButton isVisible={isVisible} onClick={() => toggleVisible()}>
          <Arrow isVisible={isVisible} />
        </ToggleButton>
        <ItemText>Algorithm</ItemText>
        <Row justifyContent="center">
          
        </Row>
      </ScrollContainer>
    </Container>
  );
};

export default SideNav;
