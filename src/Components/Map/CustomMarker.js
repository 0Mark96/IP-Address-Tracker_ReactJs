import { Marker } from "react-leaflet"
import L from 'leaflet';
import iconL from '../../images/icon-location.svg'
const iconPerson = new L.Icon({
    iconUrl: iconL,
    iconSize: [40,50],
    iconAnchor : [20,50]
});

export { iconPerson };

const CustomMarker = ({latitude,longitude}) => {
  return (
    <Marker
      position={[latitude, longitude]}
      icon={ iconPerson }
    >
    </Marker>
  )
}

export default CustomMarker