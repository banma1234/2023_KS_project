import Layout from "./components/layout";
import Router from "./router/router.js";

function App() {
  return (
    <>
      <Layout>
        <div className="App">
          <Router />
        </div>
      </Layout>
    </>
  );
}

export default App;
