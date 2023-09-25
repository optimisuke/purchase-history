// pages/index.tsx

import type { NextPage } from "next";
import OrderHistory from "../components/OrderHistory";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <OrderHistory />
    </div>
  );
};

export default Home;
