import CardInfo from "./Card-Info";
import Search from "./Search";

const Home = ({ HomeText }) => {
  return (
    <>
      <h1>{HomeText}</h1>
      <Search SearchText="Search props"/>
      <CardInfo CardInfoText="CardInfo props" />
    </>
  );
};

export default Home;
