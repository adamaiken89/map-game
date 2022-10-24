export interface Friend {
  _id: string;
  email: string;
  picture: string;
  name: {
    last: string;
    first: string;
  };
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}
