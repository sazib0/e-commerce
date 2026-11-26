export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Farmer {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: number;
  location: Location;
  specialties: string[];
  available: boolean;
}

export interface FilterOptions {
  maxDistance: number;
  onlyAvailable: boolean;
  minRating: number;
}