import React, { ReactElement, useState } from "react";
import styled from "styled-components";

import StyledSideNav from "./style";
import ScrollContainer from "./ScrollContainer";

const SideNav: React.FC<{}> = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <StyledSideNav isVisible={isVisible}>
      <ScrollContainer>
        
      </ScrollContainer>
    </StyledSideNav>
  );
};

export default SideNav;
