export interface IRoom {
  roomNumber: number;
  price: number;
  capacity: number;
  discount: number;
  faclities: string[];
  imgs: string;
}
export interface IFacilities {
  _id: string;
  name: string;
}
