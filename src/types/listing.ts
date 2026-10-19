
export type ListingStatus =
  | "PENDING"
  | "READY_TO_SELL"
  | "INACTIVE"
  | "SOLD"
  | "REJECTED";

export type ListingCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

export type ListingSeller = {
  id: string;
  name: string;
};

export type VehicleListing = {
  id: string;
  title: string;
  description: string;
  price: number;
  city: string;
  status: ListingStatus;
  isAdminOnly: boolean;
  images: string[];
  category: ListingCategory;
  seller: ListingSeller;
  createdAt: string;
};

export type CreateListingInput = {
  title: string;
  description: string;
  price: number;
  city: string;
  categorySlug: string;
  images: string[];
};
