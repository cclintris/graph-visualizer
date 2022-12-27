import React, { ReactElement, useState } from "react";
import Container from "./Container";
import OptionContainer from "./OptionContainer";
import Arrow from "./Arrow";
import Option from "./Option";

interface Props {
  options: Array<string>;
  selectedOption: number;
  setSelectedOption: Function;
}

const Dropdown: React.FC<Props> = (props: Props): ReactElement => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const options = props.options;
  const selectedOption = props.selectedOption;
  const setSelectedOption = props.setSelectedOption;

  const toggleDropdown = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Container onClick={() => toggleDropdown()}>
      <div style={{ marginLeft: "12px" }}>
        {options.length === 0 ? "" : options[selectedOption]}
      </div>
      <Arrow isExpanded={isExpanded} />
      <OptionContainer isVisible={isExpanded}>
        {options.map((val: string, idx: number) => {
          return (
            <Option
              key={val}
              onClick={() => {
                setSelectedOption(idx);
              }}
            >
              {val}
            </Option>
          );
        })}
      </OptionContainer>
    </Container>
  );
};

export default Dropdown;
