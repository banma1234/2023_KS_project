import StyledBox from "./boxStyle";

const Box = props => {
  return (
    <StyledBox {...props} color={props.color} type={props.type}>
      {props.children}
    </StyledBox>
  );
};

export default Box;
