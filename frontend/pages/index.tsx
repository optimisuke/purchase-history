// pages/index.tsx

import type { NextPage } from "next";
import OrderHistory from "../components/OrderHistory";
import { Order } from "../types/types"; // もしtypes.tsなどに型定義を別ファイルで行っている場合
import Header from "@/components/Header";

// 例えば、このようなデータ構造が考えられます
const orders: Order[] = [
  {
    orderId: 1,
    orderDate: "2023-09-25",
    purchases: [
      {
        itemId: 1,
        itemName: "Apple",
        itemPrice: 150,
        itemImage:
          "https://images-na.ssl-images-amazon.com/images/I/61vH85f6gXL._AC_SX679_.jpg",
      },
      {
        itemId: 2,
        itemName: "Banana",
        itemPrice: 100,
        itemImage:
          "https://images-na.ssl-images-amazon.com/images/I/61w-zqTvItL._AC_SX569_.jpg",
      },
    ],
  },
  {
    orderId: 2,
    orderDate: "2023-09-24",
    purchases: [
      {
        itemId: 3,
        itemName: "Orange",
        itemPrice: 200,
        itemImage:
          "https://images-na.ssl-images-amazon.com/images/I/61TZ2FNtmlL._AC_SX425_.jpg",
      },
    ],
  },
  // 他のオーダーデータ
];

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <OrderHistory orders={orders} />
    </div>
  );
};

export default Home;
