import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';

type Cords = {
  lat: number;
  lng: number;
};

function searchAddressHandler(event: Event): void {
  event.preventDefault();

  const cords: Cords = {
    lat: 52.2297,
    lng: 21.0122,
  };

  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([cords.lng, cords.lat]),
      zoom: 8,
    }),
  });
}

document.addEventListener('DOMContentLoaded', searchAddressHandler);
