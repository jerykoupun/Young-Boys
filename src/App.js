import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
const App = () => {
  return (
    /*JSX*/
    <>
      <Header headerText="Header props" />
      <Home HomeText="Home props" />
      <Footer />
    </>
  );
};

export default App;
