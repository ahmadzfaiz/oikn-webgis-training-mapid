import maplibre from 'maplibre-gl';
import { IKNLogoControl, GarudaLogoControl } from './customLogoControls';
import { HandlerToggleControl } from './handlerToggleControls';

export function addControl(map) {
    map.addControl(new maplibre.NavigationControl());
    map.addControl(
        new maplibre.AttributionControl({
            customAttribution: '© Badan Otorita IKN 2026',
        }),
        'bottom-left'
    )
    map.addControl(
        new maplibre.ScaleControl({
            unit: 'metric',
            maxWidth: 200
        }),
    )
    map.addControl(new maplibre.FullscreenControl())
    map.addControl(new maplibre.GlobeControl())
    map.addControl(new maplibre.LogoControl())
    map.addControl(new GarudaLogoControl(), 'top-left')
    map.addControl(new IKNLogoControl(), 'top-left')
    map.addControl(new HandlerToggleControl())
}