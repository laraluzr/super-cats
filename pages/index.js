import { useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Hero heading="Our team is driven for your success" />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
export default Home;
