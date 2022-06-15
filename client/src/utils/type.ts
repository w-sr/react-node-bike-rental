export type QueryHookResult<T> = {
  data?: T;
  loading: boolean;
  refetch?: () => void;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type Bike = {
  id: string;
  model: string;
  color: string;
  location: string;
  rating: number;
  rented: boolean;
};

export type Reservation = {
  id: string;
  user: User;
  bike: Bike;
  start_date: string;
  end_date: string;
};
