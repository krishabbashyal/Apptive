'use client';
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

// Define types and constants
type HeatmapPoint = [number, number, number]; // [lat, lng, intensity]

// USA bounds for the map view
const USA_BOUNDS: L.LatLngBoundsExpression = [
  [24.396308, -125.0], 
  [49.384358, -66.93457] 
];

const HEATMAP_DATA: HeatmapPoint[] = [
  [40.7128, -74.0060, 1.0], // NYC
  [34.0522, -118.2437, 0.8], // LA
  [41.8781, -87.6298, 0.7], // Chicago
];

const HeatmapLayer = () => {
  const map = useMap();
  // eslint-disable-next-line
  const heatLayerRef = useRef<any>(null);
  
  useEffect(() => {
    const createHeatLayer = () => {
      if (!L.heatLayer) {
        console.error('L.heatLayer is not available');
        return;
      }
      
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
      }
      
      heatLayerRef.current = L.heatLayer(HEATMAP_DATA, {
        radius: 35,
        blur: 25,
        minOpacity: 0.3,
        max: 1,
        maxZoom: 40,
        gradient: { 0.2: '#57068c', 0.5: '#BB86FC', 0.8: '#ff00ff' },
      });
      

      heatLayerRef.current.addTo(map);
    };
    
    createHeatLayer();

    setTimeout(() => {
      map.panBy([1, 1]);
      setTimeout(() => {
        map.panBy([-1, -1]);
      }, 10);
    }, 0);


  }, [map]);
  
  return null;
};


const ApplicationMap = () => {
  return (
    <div className="h-[1275px] w-[1500px] rounded-x overflow-clip relative">
      <MapContainer
        center={[37.8, -96]} // Center of USA
        zoom={5}
        zoomControl={false}
        minZoom={5}
        maxBounds={USA_BOUNDS}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <HeatmapLayer />
      </MapContainer>
    </div>
  );
};

export default ApplicationMap;