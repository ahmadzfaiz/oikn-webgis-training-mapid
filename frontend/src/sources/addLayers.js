import { naturalEarth } from "./addSources";

export function addLayers(map) {
    const layers = {
        ports: "ports-layer",
        populated: "populated-layer"
    }

    const neSource = naturalEarth(map);

    // map.addLayer({
    //     id: layers.ports,
    //     type: "circle",
    //     source: neSource.ports,
    //     paint: {
    //         'circle-color': 'red',
    //         'circle-radius': 5
    //     }
    // })

    map.addLayer({
        id: layers.populated,
        type: "circle",
        source: neSource.populated,
        'source-layer': 'populated_places',
        paint: {
            'circle-color': 'black',
            'circle-radius': 3
        }
    })

    map.addLayer({
        id: 'countries-wms-layer',
        type: 'raster',
        source: neSource.country,
        paint: {
            'raster-opacity': 0.7
        }
    });

    return layers
}