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

type Order = {
  id: number;
  createdat: string;
  purchases: Purchase[];
};

type Purchase = {
  id: number;
  title: string;
  image: string;
};

const orders: Order[] = [
  {
    id: 1,
    createdat: "2023-09-25",
    purchases: [
      {
        id: 1,
        title: "Apple",
        image: "apple-image-url",
      },
      {
        id: 2,
        title: "Banana",
        image: "banana-image-url",
      },
    ],
  },
  {
    id: 2,
    createdat: "2023-09-25",
    purchases: [
      {
        id: 1,
        title: "Tomato",
        image: "tomato-image-url",
      },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <h1>Order History</h1>
      <div>
        {orders.map((order) => (
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
                  {order.purchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell>
                        <Avatar
                          variant="square"
                          src={purchase.image}
                          sx={{ width: 100, height: 100 }}
                        />
                      </TableCell>
                      <TableCell>{purchase.title}</TableCell>
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
