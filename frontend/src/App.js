import Layout from "./components/layout";
import Router from "./router/router.js";
import { Store } from './utils/store';

function App() {
  return (
    <>
      <Store>
        <Layout>
          <div className="App">
            <Router />
          </div>
        </Layout>
      </Store>
    </>
  );
}

export default App;
