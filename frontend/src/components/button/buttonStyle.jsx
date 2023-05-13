import styled, { css } from "styled-components";
import { useColor } from "../../utils/hooks";

const StyledButton =
  styled.button.attrs(props => ({}))
  `
  ${props => {
    const width = { default: "200px", small: "110px", login: "100%" };
    const height = { default: "50px", small: "45px", login: "50px" };

    const typeHandler = props.ButtonType;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color === "gray" || props.color === "og_white"
        ? "black"
        : "white"};
      font-size: 16px;
      width: ${width[typeHandler]};
      height: ${height[typeHandler]};
      border: none;
      /* margin: 0.5rem; */
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 999999px;
    `;
  }};
`;

export default StyledButton;
