// pages/index.tsx

import {
  AppBar,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

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
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Purchase History
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        {orders.map((order: Order) => (
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
