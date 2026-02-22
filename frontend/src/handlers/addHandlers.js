import maplibregl from 'maplibre-gl';

export function addHandlers(map) {
    // map.boxZoom.disable();
    console.log("Box zoom", map.boxZoom.isEnabled());
    
    // map.keyboard.disable();
    console.log("Keyboard handler", map.keyboard.isEnabled());
    
    // map.scrollZoom.disable();
    console.log("Scroll zoom", map.scrollZoom.isEnabled());
    
    // map.touchZoomRotate.disable();
    console.log("Touch zoom rotate", map.touchZoomRotate.isEnabled());
}