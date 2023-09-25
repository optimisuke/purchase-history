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
import { Order } from "../types/types"; // もしtypes.tsなどに型定義を別ファイルで行っている場合
import { Purchase } from "@/types/types";

type OrderHistoryProps = {
  orders: Order[];
};

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <Paper key={order.orderId} style={{ marginBottom: "16px" }}>
          <Typography variant="h6" style={{ padding: "16px" }}>
            Order ID: {order.orderId}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item ID</TableCell>
                  <TableCell>Item Image</TableCell>
                  <TableCell>Item Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.purchases.map((purchase: Purchase) => (
                  <TableRow key={purchase.itemId}>
                    <TableCell>{purchase.itemId}</TableCell>
                    <TableCell>
                      <Avatar
                        variant="square"
                        src={purchase.itemImage}
                        sx={{ width: 64, height: 64 }} // ここでサイズを調整
                      />
                    </TableCell>
                    <TableCell>{purchase.itemName}</TableCell>
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
