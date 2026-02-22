import { createMap } from "./map/createMap";
import { addControl } from "./controls/addControl";
import { jakarta, nusantara, floatingPoint } from "./markers/addCityMarker";
import { addHandlers } from "./handlers/addHandlers";
import { addMapEvent } from "./events/addMapEvents";

const map = createMap();

addControl(map);
jakarta.addTo(map);
nusantara.addTo(map);
floatingPoint.addTo(map);
// addHandlers(map);
addMapEvent(map);