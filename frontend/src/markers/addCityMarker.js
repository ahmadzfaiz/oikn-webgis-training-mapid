import maplibre from 'maplibre-gl';
import { jakartaPopup, nusantaraPopup } from '../popup/addCityPopup';

export const jakarta = new maplibre.Marker({
    color: "#fcba03"
})
    .setLngLat([106.82707763494278, -6.175557935213642])
    .setPopup(jakartaPopup)

export const nusantara = new maplibre.Marker({
    color: "#11bf11"
})
    .setLngLat([116.7085219010629, -0.9726748698120602])
    .setPopup(nusantaraPopup)

export const floatingPoint = new maplibre.Marker({
    color: "#000000",
    draggable: true
}).setLngLat([118, -2.5])
