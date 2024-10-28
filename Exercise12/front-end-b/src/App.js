import Hello from "./components/Hello";
import World from "./components/World";

const App = () => {
  const hello = "Hello world";
  return (
    /*JSX*/
    <>
      <h1>{hello}</h1>
      <h2>Hello React</h2>
      <Hello />
      <World />
    </>
  );
};

export default App;
