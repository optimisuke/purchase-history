// components/PurchaseHistory.tsx

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type Purchase = {
  id: number;
  item: string;
  price: number;
  date: string;
};

type PurchaseHistoryProps = {
  purchases: Purchase[];
};

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ purchases }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell>{purchase.id}</TableCell>
              <TableCell>{purchase.item}</TableCell>
              <TableCell align="right">{purchase.price}</TableCell>
              <TableCell align="right">{purchase.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PurchaseHistory;
