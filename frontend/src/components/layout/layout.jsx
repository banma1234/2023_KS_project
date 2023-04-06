import { Container, Section, Article, Aside } from "./layoutStyle";
import NavBar from "../navBar/navBar";
import Footer from "../footer/Footer";

const LayoutComponent = props => {
  return (
    <Section>
      <header>
        <NavBar />
      </header>
      <main>
        <Container>
          <nav>
            <Aside />
          </nav>
          <article>
            <Article>{props.children}</Article>
          </article>
          <section>
            <Aside />
          </section>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </Section>
  );
};

export default LayoutComponent;
