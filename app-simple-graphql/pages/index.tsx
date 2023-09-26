// pages/index.tsx

import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

import { useQuery, gql } from "@apollo/client";

// 定義したGraphQLクエリ
const GET_ORDERS = gql`
  query GetOrders {
    customer(id: 1) {
      order {
        lineitem {
          product {
            id
            image
            title
          }
        }
        id
        createdat
      }
      id
      name
    }
  }
`;

type Order = {
  id: number;
  createdat: string;
  lineitem: Lineitem[];
};

type Lineitem = {
  product: Product;
};

type Product = {
  id: number;
  title: string;
  image: string;
};

const orders: Order[] = [
  {
    id: 1,
    createdat: "2023-09-25",
    lineitem: [
      {
        product: {
          id: 1,
          title: "Apple",
          image: "apple-image-url",
        },
      },
      {
        product: {
          id: 2,
          title: "Banana",
          image: "banana-image-url",
        },
      },
    ],
  },
  {
    id: 2,
    createdat: "2023-09-25",
    lineitem: [
      {
        product: {
          id: 1,
          title: "Tomato",
          image: "tomato-image-url",
        },
      },
    ],
  },
];

const Home: NextPage = () => {
  // クエリの実行
  const { loading, error, data } = useQuery(GET_ORDERS);

  // ローディングとエラーハンドリング
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Order History</h1>
      <div>
        {data.customer.order.map((order: Order) => (
          <Paper key={order.id} style={{ marginBottom: "16px" }}>
            <Typography variant="h6" style={{ padding: "16px" }}>
              Order ID: {order.id}
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: 20 }}>Image</TableCell>
                    <TableCell style={{ width: 1000 }}>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.lineitem.map((lineitem) => (
                    <TableRow key={lineitem.product.id}>
                      <TableCell>
                        <Avatar
                          variant="square"
                          src={lineitem.product.image}
                          sx={{ width: 100, height: 100 }}
                        />
                      </TableCell>
                      <TableCell>{lineitem.product.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Home;
