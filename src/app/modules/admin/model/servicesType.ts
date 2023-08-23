// export interface availableService {
//     services:services[]
// }

export interface services {
  description: string;
  isfeleted?: boolean;
  servicelogo?: string[];
  thumbnail: string[];
  title: string;
  _id?: string;
}

export interface chart {
  count: number;
  month: string;
  _id?: string;
}
