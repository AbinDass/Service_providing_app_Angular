export interface plans {
  mainHead: string;
  plan: string;
  price: number;
  subHead: string;
  users: users[];
  _id: string;
}

interface users {
  subscriptionStatus: string;
  userid: string;
  _id?: string;
}

export interface payment {
  id: string;
  razorpay: boolean;
  subscibtiondata: subData;
}

interface subData {
  amount: number;
  amount_due?: number;
  amount_paid?: number;
  attempts?: number;
  created_at?: number;
  currency?:string;
  entity?: string;
  id?: string;
}
