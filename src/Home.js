import React from "react";
import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
  // const name=useContext(AppContext);
  // const name = useGlobalContext();
  return (
    <>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
