import { Types } from "mongoose";

export interface IRestaurant {
  _id: Types.ObjectId;

  name: string;
  description: string;

  logo: {
    url: string;
    publicId: string;
  };
  banner: {
    url: string;
    publicId: string;
  };

  email: string;
  phone: number;

  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
  };

  owner: Types.ObjectId;
  admins: Types.ObjectId[];

  rating: number;
  totalReviews: number;

  isOpen: boolean;
  isVerified: boolean;

  createdAt: Date;
  updatedAt: Date;
}
