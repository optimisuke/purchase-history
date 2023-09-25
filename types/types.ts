export type Order = {
  orderId: number;
  orderDate: string;
  purchases: Purchase[];
};

export type Purchase = {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemImage: string;
};

export type User = {
  id: number;
  name: string;
};
