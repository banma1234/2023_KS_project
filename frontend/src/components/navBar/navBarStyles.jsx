import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  font-weight: 600;
  background-color: #7f4dd1;
  display: flex;
  position: fixed;
  z-index: 9999;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 70rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin-left: 1.5rem;
  display: flex;
`;

export const NavMenu = styled.ul`
  display: flex;
  margin-right: 1.5rem;
  column-gap: 30px;
`;
