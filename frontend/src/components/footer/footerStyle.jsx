import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #262626;
  z-index: 9999;
`;

export const FooterContainer = styled.div`
  display: grid;
  height: 80%;
  justify-content: center;
  padding: 1rem;
  border-left: 2rem solid;
  border-color: #7f4dd1;
  color: #f7f6fb;
  grid-template-columns: 160px 1fr 8rem;
  @media all and (max-width: 935px) {
    grid-template-columns: 1fr 8rem;
  }
`;

export const FooterMenu = styled.ul`
  max-width: 250px;
  margin-top: -0.2rem;
  margin-left: -1.5rem;
  li {
    padding: 0.3rem;
  }
`;
