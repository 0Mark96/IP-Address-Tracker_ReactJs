import { useContext, useEffect, useRef, useState } from 'react';
import styles from './AddressInfo.module.scss';
import classnames from 'classnames';
//img
import infoImg from '../../../images/info.png';
import closeImg from '../../../images/close.png';
import { APIdataContext } from '../../../App';

const AddressInfo = ({getHeaderHeight}) => {
  // style destructuring
  const {info_cont,col,btn,closed_info_cont} = styles
  // take infoContainer position (to set header height)
  const infoCont = useRef()
  useEffect(()=>{
    getHeaderHeight(infoCont)
    window.addEventListener('resize',()=>getHeaderHeight(infoCont))
  })

  // toggle info container
     const [isInfoContOpen,setIsInfoContOpen] = useState(true)
     
  // GEOLOCATION DATA
  const {data,isLoading,isError } = useContext(APIdataContext)
  return (
    <div className={classnames(info_cont,{[closed_info_cont]:!isInfoContOpen})} ref={infoCont}>
        <button className={btn} onClick={()=>setIsInfoContOpen(!isInfoContOpen)}>{<img src={isInfoContOpen ? closeImg : infoImg} alt='info'/>}</button>
        {isInfoContOpen && !!isLoading && <h3 style={{padding:30}}>Loading...</h3>}
        {isInfoContOpen && !!isError && <h3 style={{padding:30}}>Error message : No results found</h3>}
        {!isError && !isLoading && <>
        <div className={col}>
            <p>IP ADDRESS</p>
            <h2>{data?.ip}</h2>
        </div>
        <div className={col}>
            <p>LOCATION</p>
            <h2>{data?.location?.city}, {data?.location?.country} {data?.location?.postalCode}</h2>
        </div>
        <div className={col}>
            <p>TIMEZONE</p>
            <h2>UTC{data?.location?.timezone}</h2>
        </div>
        <div className={col}>
            <p>ISP</p>
            <h2>{data?.isp}</h2>
        </div>  
        </>
      }
    </div>
  )
}

export default AddressInfo