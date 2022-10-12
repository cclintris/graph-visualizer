import styled from "styled-components";

interface Props {
  isVisible: boolean;
}

const Container = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 250px;
  z-index: 1000;
  left: ${(props) => (props.isVisible ? 0 : "-250px")};
  overflow-x: hidden;
  transition-duration: 0.3s;
  scrollbar-color: white transparent;
  scrollbar-width: thin;
  background-color: ${(props) => props.theme.sidebar.background};

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

export default Container;
