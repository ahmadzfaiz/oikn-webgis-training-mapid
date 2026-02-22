export function naturalEarth(map) {
    const layers = {
        ports: 'NE Ports',
        populated: 'NE Populated Place',
        country: 'NE Country',
    }

    map.addSource(layers.ports, {
        type: 'geojson',
        data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
    });
    
    map.addSource(layers.populated, {
        type: 'vector',
        tiles: [
            'http://localhost:5173/geoserver/gwc/service/tms/1.0.0/ne:populated_places@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
        ],
        scheme: 'tms',
        minzoom: 0,
        maxzoom: 14
    });

    map.addSource(layers.country, {
        type: 'raster',
        tiles: [
            '/geoserver/ne/wms?service=WMS&version=1.1.0&request=GetMap&layers=ne:countries&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&styles=&format=image/png&transparent=true'
        ],
        tileSize: 256
    });

    return layers
}