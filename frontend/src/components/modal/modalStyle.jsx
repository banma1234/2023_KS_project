import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 220px;
  position: relative;
  justify-content: center;
  text-align: center;
  font-size: 26px;
  background-color: white;
  top: 30%; left: 40%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9990;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;