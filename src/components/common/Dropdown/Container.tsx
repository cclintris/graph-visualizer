import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div.attrs({
  width: 150,
})`
  user-select: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: ${(props) => `${props.width}px`};
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  background-color: ${(props) =>
    props.theme.name === "dark"
      ? theme.light.navbar.background
      : theme.dark.navbar.background};
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: background-color;
`;

export default Container;
