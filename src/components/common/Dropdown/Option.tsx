import styled from "styled-components";

const Option = styled.div`
  width: 100%;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.navbar.background};
  }
`;

export default Option;
