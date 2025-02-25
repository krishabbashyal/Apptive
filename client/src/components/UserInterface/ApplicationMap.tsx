'use client';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the bounds for the USA view
const bounds: L.LatLngBoundsExpression = [
  [24.396308, -125.0], // Southwest (Hawaii)
  [49.384358, -66.93457] // Northeast (Maine)
];

// Sample heatmap data
const heatmapData = [
  [40.7128, -74.0060, 1.0], // NYC - increased intensity
  [40.7128, -74.0060, 1.0], // NYC
  [40.7128, -74.0060, 1.0], // NYC
  [40.7128, -74.0060, 1.0], // NYC
  [40.7128, -74.0060, 1.0], // NYC
  [34.0522, -118.2437, 0.8], // LA - increased intensity
  [41.8781, -87.6298, 0.7], // Chicago - increased intensity
  [29.7604, -95.3698, 0.6], // Houston - increased intensity
];

const ApplicationMap = () => {
  const [map, setMap] = useState<L.Map | null>(null);

  // This effect dynamically loads and initializes the heatmap
  useEffect(() => {
    if (!map) return;

    // Dynamically import the leaflet.heat library
    import('leaflet.heat').then(() => {
      // Make sure we have the L.heatLayer function available
      if (typeof L.heatLayer === 'function') {
        // eslint-disable-next-line
        const heatLayer = L.heatLayer(heatmapData as any, {
          radius: 35,
          blur: 25,
          minOpacity: 0.3,
          max: 1,
          maxZoom: 40,
          gradient: { 0.2: '#57068c', 0.5: '#BB86FC', 0.8: '#ff00ff' },
        }).addTo(map);

        return () => {
          map.removeLayer(heatLayer);
        };
      } else {
        console.error('L.heatLayer is not available');
      }
    }).catch(err => {
      console.error('Failed to load leaflet.heat', err);
    });
  }, [map]);

  return (
<div className="h-[1275px] w-[1500px] rounded-x overflow-clip">
      <MapContainer
        center={[37.8, -96]} // Center of USA
        zoom={5}
        zoomControl={false}
        minZoom={5}
        maxBounds={bounds}
        style={{ height: '100%', width: '100%', }}
        ref={setMap}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
};

export default ApplicationMap;