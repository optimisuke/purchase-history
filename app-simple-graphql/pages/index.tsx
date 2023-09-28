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
import { useQuery, gql } from "@apollo/client";

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

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(
    gql`
      query GetOrders($id: Int!) {
        customer(id: $id) {
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
    `,
    {
      variables: { id: 4 },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  const orders: Order[] = data.customer.order;

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
