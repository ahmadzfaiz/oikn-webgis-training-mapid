import maplibre from 'maplibre-gl';

import { addLayers } from "../sources/addLayers";
import { showNameWebsitePopup } from "../popup/addGeojsonPopup";

export function addMapEvent(map) {

    map.on("load", function() {
        addLayers(map);
    });

    
    const popup = new maplibre.Popup()
    map.on("click", 'ports-layer', function(event) {
        showNameWebsitePopup(event, popup).addTo(map)
    })
    
    // map.on("mousemove", 'ports-layer', function(event) {
    //     showNameWebsitePopup(event, popup).addTo(map)
    // })
    
    // map.on("mouseleave", 'ports-layer', function(event) {
    //     popup.remove();
    // })
}