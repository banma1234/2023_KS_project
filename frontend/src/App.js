import NavBar from './components/navBar';
import Router from './router/router.js';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
