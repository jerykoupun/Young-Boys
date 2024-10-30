import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const Generations = ({ genText }) => {
  return (
    <>
      <h1>{genText}</h1>
      <Gen1 gen1Text="Gen1 props" />
      <Gen2 gen2Text="Gen2 props" />
      <Gen3 gen3Text="Gen3 props" />
      <Gen4 gen4Text="Gen4 props" />
    </>
  );
};

export default Generations;
