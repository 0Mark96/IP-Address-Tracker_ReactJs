//style
import styles from './Header.module.scss';
//Components
import SearchBar from './SearchBar/SearchBar';
import AddressInfo from './AddressInfo/AddressInfo';
// hoooks
import { useState } from 'react';

const Header = ({handleSubmit}) => {
   
  // classNames destructuring
    const {header_cont,h1_header} = styles 
    
  //calculate header height according to info container
    const [headerHeight,setHeaderHeight] = useState()
    const getHeaderHeight = (infoCont)=>{
        let distanceToTop= infoCont.current.offsetTop
        let halfHeight = infoCont.current.clientHeight / 2
        setHeaderHeight(distanceToTop + halfHeight)
    }

  return (
    <header className={header_cont} style={{height:headerHeight}}>
        <h1 className={h1_header} >IP Address Tracker</h1>
        <SearchBar handleSubmit={handleSubmit}/>
        <AddressInfo getHeaderHeight = {getHeaderHeight}/>
    </header>
  )
}

export default Header