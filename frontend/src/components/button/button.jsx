import StyledButton from "./buttonStyle";

const Button = props => {
  return (
    <StyledButton {...props} color={props.color} ButtonType={props.ButtonType}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
