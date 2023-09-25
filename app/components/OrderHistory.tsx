// components/OrderHistory.tsx

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import { GetOrdersDocument } from "@/gql/graphql";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userState } from "@/state";

const OrderHistory: React.FC = () => {
  const [user, _] = useRecoilState(userState);
  const id = user?.id!;
  const { loading, error, data } = useQuery(GetOrdersDocument, {
    variables: { id: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.customer?.order!.map((order) => (
        <Paper key={order?.id} style={{ marginBottom: "16px" }}>
          <Typography variant="h6" style={{ padding: "16px" }}>
            Order ID: {order?.id}, Order Data: {order?.createdat}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: 20 }}>ID</TableCell>
                  <TableCell style={{ width: 30 }}>Image</TableCell>
                  <TableCell style={{ width: 1000 }}>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order?.lineitem!.map((purchase) => (
                  <TableRow key={purchase?.product?.id}>
                    <TableCell>{purchase?.product?.id}</TableCell>
                    <TableCell>
                      <Avatar
                        variant="square"
                        src={purchase?.product?.image!}
                        sx={{ width: 100, height: 100 }} // ここでサイズを調整
                      />
                    </TableCell>
                    <TableCell>{purchase?.product?.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </div>
  );
};

export default OrderHistory;
