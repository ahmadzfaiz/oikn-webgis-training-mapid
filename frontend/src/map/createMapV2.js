import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export function createMap() {
    return new maplibre.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [120, -4.73],
        zoom: 4,
        hash: true
    });
};