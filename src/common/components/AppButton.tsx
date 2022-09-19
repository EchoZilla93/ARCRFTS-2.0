import styled from "styled-components";
import { colors } from "../../constants/theme/colors";

interface AppButtonProps {
  title: string;
  active?: boolean;
  onClickHandler: () => any;
}

const Button = styled.button`
  min-height: 58px;
  min-width: 371px;
  border: none;
  cursor: pointer;
  border-radius: 14px;
  transition: all 0.3s;
  font-family: "Mohave", sans-serif;
  font-size: 20px;
  color: #fff;
  &:active {
    margin-top: 2px;
  }
`;

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  active,
  onClickHandler,
}) => {
  return (
    <Button
      disabled={active}
      style={{
        backgroundColor: active
          ? colors.appButton.active
          : colors.appButton.unactive,
      }}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};
