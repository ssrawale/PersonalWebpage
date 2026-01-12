'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Map, { Marker, Popup, MapRef } from 'react-map-gl';
import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import type { CoffeeShopFeature, CoffeeShopCollection } from '@/types/coffee';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MAPBOX_USERNAME = process.env.NEXT_PUBLIC_MAPBOX_USERNAME;
const DATASET_ID = process.env.NEXT_PUBLIC_MAPBOX_DATASET_ID;

export default function CoffeePage() {
  const [selectedShop, setSelectedShop] = useState<CoffeeShopFeature | null>(null);
  const [hoveredShop, setHoveredShop] = useState<CoffeeShopFeature | null>(null);
  const [coffeeData, setCoffeeData] = useState<CoffeeShopCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [viewState, setViewState] = useState({
    longitude: -83.0007,
    latitude: 39.9683,
    zoom: 12,
  });

  const mapRef = useRef<MapRef>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Fetch data from Mapbox Dataset API
  useEffect(() => {
    const fetchCoffeeData = async () => {
      // Skip fetch if credentials not configured
      

      try {
        setLoading(true);
        const url = `https://api.mapbox.com/datasets/v1/${MAPBOX_USERNAME}/${DATASET_ID}/features?access_token=${MAPBOX_TOKEN}`;
        
        console.log('Fetching from Mapbox Dataset:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Fetched coffee shop data:', data);
        
        setCoffeeData(data as CoffeeShopCollection);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load coffee shop data';
        setError(errorMessage);
        console.error('Error fetching coffee data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (MAPBOX_TOKEN) {
      fetchCoffeeData();
    } else {
      setError('Mapbox token not found');
      setLoading(false);
    }
  }, []);

  const handleMarkerClick = useCallback((shop: CoffeeShopFeature) => {
    setSelectedShop(shop);
    
    mapRef.current?.flyTo({
      center: shop.geometry.coordinates,
      zoom: 14,
      duration: 1500,
    });

    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }, 800);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-dark-charcoal border-b border-dark-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/icons/pin.png" 
              alt="Map Pin" 
              className="w-8 h-8"
            />
            <h1 className="text-4xl font-bold text-text-primary">
              Columbus Coffee Scene
            </h1>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl">
            Interactive map to explore specialty and third wave coffee shops in Columbus, Ohio. 
          </p>
          <p className="text-lg text-text-secondary max-w-3xl">
            This project uses the MapBox API/GL JS and a custom cloud geodatabase to populate its features.
          </p>
          
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[600px] border-b border-dark-border">
        {!MAPBOX_TOKEN ? (
          <div className="h-full flex items-center justify-center bg-dark-charcoal">
            <div className="text-center p-8 max-w-md">
              <MapPin className="w-16 h-16 text-accent-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Mapbox Token Required
              </h3>
              <p className="text-text-secondary">
                Please add your Mapbox access token to the .env.local file.
              </p>
              <code className="block mt-4 p-3 bg-dark-bg border border-dark-border rounded text-sm text-accent-blue">
                NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
              </code>
            </div>
          </div>
        ) : loading ? (
          <div className="h-full flex items-center justify-center bg-dark-charcoal">
            <div className="text-center">
              <img 
                src="/icons/pin.png" 
                alt="Loading" 
                className="w-16 h-16 mx-auto mb-4 animate-pulse"
              />
              <p className="text-text-secondary">Loading coffee shops from Mapbox Dataset...</p>
            </div>
          </div>
        ) : error ? (
          <div className="h-full flex items-center justify-center bg-dark-charcoal">
            <div className="text-center p-8 max-w-md">
              <p className="text-red-500 mb-4 font-semibold">Error Loading Data</p>
              <p className="text-text-secondary text-sm mb-4">{error}</p>
              <div className="text-left bg-dark-bg p-4 rounded border border-dark-border">
                <p className="text-text-secondary text-sm mb-2">Make sure to:</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>1. Upload coffee_data.json to Mapbox Studio</li>
                  <li>2. Update MAPBOX_USERNAME in coffee/page.tsx</li>
                  <li>3. Update DATASET_ID in coffee/page.tsx</li>
                </ul>
              </div>
            </div>
          </div>
        ) : coffeeData && coffeeData.features.length > 0 ? (
          <Map
            ref={mapRef}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {coffeeData.features.map((shop) => (
              <Marker
                key={shop.properties.id}
                longitude={shop.geometry.coordinates[0]}
                latitude={shop.geometry.coordinates[1]}
                anchor="bottom"
              >
                <div
                  className="cursor-pointer transform transition-transform hover:scale-110"
                  onClick={() => handleMarkerClick(shop)}
                  onMouseEnter={() => setHoveredShop(shop)}
                  onMouseLeave={() => setHoveredShop(null)}
                >
                  <img 
                    src="/icons/pin.png" 
                    alt="Location Pin" 
                    className="w-8 h-8"
                  />
                </div>
              </Marker>
            ))}

            {hoveredShop && (
              <Popup
                longitude={hoveredShop.geometry.coordinates[0]}
                latitude={hoveredShop.geometry.coordinates[1]}
                anchor="top"
                closeButton={false}
                closeOnClick={false}
                offset={25}
              >
                <div className="text-center">
                  <p className="font-semibold text-text-primary">
                    {hoveredShop.properties.name}
                  </p>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-accent-blue fill-current" />
                    <span className="text-text-secondary text-sm">
                      {hoveredShop.properties.rating}/5
                    </span>
                  </div>
                </div>
              </Popup>
            )}
          </Map>
        ) : (
          <div className="h-full flex items-center justify-center bg-dark-charcoal">
            <p className="text-text-secondary">No coffee shops found in dataset</p>
          </div>
        )}
      </div>

      {/* Details Panel */}
      <div ref={detailsRef} className="py-12 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          {selectedShop ? (
            <div className="bg-dark-charcoal border border-dark-border rounded-none overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={selectedShop.properties.imageUrl}
                    alt={selectedShop.properties.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-bold text-text-primary">
                      {selectedShop.properties.name}
                    </h2>
                    <div className="flex items-center space-x-1 bg-dark-bg px-3 py-1 rounded border border-dark-border">
                      <Star className="w-5 h-5 text-accent-blue fill-current" />
                      <span className="text-lg font-semibold text-text-primary">
                        {selectedShop.properties.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {selectedShop.properties.overview}
                  </p>

                  {selectedShop.properties.recommendation && (
                    <div className="mb-6 p-4 bg-dark-bg border border-dark-border rounded">
                      <p className="text-sm text-text-secondary mb-1">Shreya's Recommendation</p>
                      <p className="text-accent-blue font-medium">{selectedShop.properties.recommendation}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedShop.properties.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark-bg border border-dark-border text-text-secondary text-sm rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <img 
                src="/icons/pin.png" 
                alt="Location Pin" 
                className="w-16 h-16 mx-auto mb-4 opacity-50"
              />
              <p className="text-text-secondary text-lg">
                Click a coffee shop marker on the map to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}