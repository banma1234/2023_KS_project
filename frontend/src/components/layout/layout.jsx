import { Container, Section, Article } from "./layoutStyle";
import NavBar from "../navBar/navBar";

const LayoutComponent = props => {
  return (
    <Section>
      <header>
        <NavBar />
      </header>
      <main>
        <Container>
          <article>
            <Article>{props.children}</Article>
          </article>
        </Container>
      </main>
    </Section>
  );
};

export default LayoutComponent;
