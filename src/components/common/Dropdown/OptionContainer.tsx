import styled from "styled-components";
import theme from "../../../theme";

interface Props {
  isVisible: boolean;
}

const ContentContainer = styled.div<Props>`
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: ${(props) => (props.isVisible ? "135px" : "0px")};
  border-radius: 0px 0px 12px 12px;
  background-color: ${(props) =>
    props.theme.name === "dark"
      ? theme.light.navbar.background
      : theme.dark.navbar.background};

  transition: max-height 0.2s, background-color 0.3s;
  scrollbar-color: white transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export default ContentContainer;
