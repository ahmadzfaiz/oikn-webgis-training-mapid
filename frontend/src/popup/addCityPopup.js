import maplibre from 'maplibre-gl';

export const jakartaPopup = new maplibre.Popup().setHTML(`
    <h3>Jakarta</h3>
    <img 
        src="src/assets/img/logo-jakarta.png" 
        alt="Logo Jakarta"
        style="width: 100px">
`)

export const nusantaraPopup = new maplibre.Popup().setHTML(`
    <h3>Nusantara</h3>
    <img 
        src="src/assets/img/logo-ikn.png" 
        alt="Logo Nusantara"
        style="width: 100px">
`)