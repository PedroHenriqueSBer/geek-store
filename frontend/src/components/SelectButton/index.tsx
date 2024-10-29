import { ISelectButton } from "props";
import { StyleSelectedButton } from "./style";

export const SelectedButton = (props: ISelectButton) => {
  const { actualValue, onSelected, value } = props;
  const handleClick = () => {
    if (value !== actualValue) onSelected(value);
  };

  return <StyleSelectedButton {...props} onClick={handleClick} />;
};
