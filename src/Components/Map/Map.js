import { useContext, useEffect, useState } from 'react';
import { APIdataContext } from '../../App';
// react-leaflet-component
import { MapContainer, TileLayer } from 'react-leaflet'
import ChangeMapView from './changeMapView';
import CustomMarker from './CustomMarker';

const Map = () => {
  const {data} = useContext(APIdataContext)
  const [latitude,setLatitude] = useState(51.505)
  const [longitude,setLongitude] = useState(-0.09)

  useEffect(()=>{
    if(data){
         setLatitude(data?.location?.lat)
         setLongitude(data?.location?.lng)
    }
  },[data])
      return (
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{height:'600px',zIndex:0}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CustomMarker latitude={latitude} longitude={longitude}/>
        <ChangeMapView latitude={latitude} longitude={longitude}/>
    </MapContainer> 
  )
  } 

export default Map