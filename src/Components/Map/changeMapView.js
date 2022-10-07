import { useMap } from 'react-leaflet/hooks'

function ChangeMapView({latitude, longitude}) {
    const map = useMap()
    map.setView([latitude, longitude], 13)

    return null
}

export default ChangeMapView