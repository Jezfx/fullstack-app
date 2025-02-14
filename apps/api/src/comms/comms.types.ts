export type TPrices = Map<string, number>;

export type TCat = {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: string;
};

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: TCat[];
};

export type TNextDelivery = {
  totalPrice: number;
  freeGift: boolean;
  title: string;
  message: string;
};
