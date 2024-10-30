import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
const App = () => {
  return (
    /*JSX*/
    <>
      <Header />
      <Home HomeText="Home props" />
      <Footer />
    </>
  );
};

export default App;
