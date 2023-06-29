import styled, { css } from "styled-components";
import { useColor } from "../../utils/hooks";

const StyledBox = styled.button.attrs(props => ({}))`
  ${props => {
    const width = { default: "500px", small: "200px" };
    const height = { default: "400px", small: "150px" };

    const typeHandler = props.type;
    return css`
      font-size: 16px;
      width: ${width[typeHandler]};
      height: ${height[typeHandler]};
      border: none;
      text-align: left;
      padding: 2rem;
      border: 3px solid ${useColor(props.color)};
      border-radius: 20px;
    `;
  }};
`;

export default StyledBox;
