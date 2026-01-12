export interface CoffeeShopProperties {
  id: string;
  name: string;
  rating: number;
  overview: string;
  recommendation?: string;
  features: string[];
  imageUrl: string;
}

export interface CoffeeShopFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: CoffeeShopProperties;
}

export interface CoffeeShopCollection {
  type: 'FeatureCollection';
  features: CoffeeShopFeature[];
}