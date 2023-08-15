import { userModel } from './userState';

export interface workerState {
  approved: boolean;
  createdAt: string;
  description: string;
  distric: string;
  labour: number;
  liecence: string[];
  location: string;
  servicetitle: string;
  state: string;
  updatedAt: string;
  user: userModel;
  _id: string;
}

// export interface WorkerState {
//   worker: workerState[];
// }
