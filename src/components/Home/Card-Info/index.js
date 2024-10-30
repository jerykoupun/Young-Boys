import Evolution from "./Evolution";
import Logo from "./Logo";
import TypeEffect from "./Type-Effect";

const CardInfo = ({ CardInfoText }) => {
  return (
    <>
      <h1>{CardInfoText}</h1>
      <Evolution EvolutionText="Evolution props" />
      <TypeEffect TypeEffectText="TypeEffect props" />
      <Logo LogoText="Logo props" />
    </>
  );
};

export default CardInfo;
