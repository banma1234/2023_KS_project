import { StyledFooter, FooterContainer, FooterMenu } from "./footerStyle";
import { useIcons } from "../../utils/hooks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <h2>wow</h2>
        </div>
        <FooterMenu>
          <h1>Choco Ham</h1>
          <li>{useIcons("mail", "18")} &nbsp; banma1234@gmail.com</li>
          <li>
            <Link href="https://github.com/banma1234">
              {useIcons("github", "18")} &nbsp; github.com/banma1234
            </Link>
          </li>
        </FooterMenu>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
