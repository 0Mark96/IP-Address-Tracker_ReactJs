import styles from './SearchBar.module.scss';
import arrow from '../../../images/icon-arrow.svg';
import { useState } from 'react';

const SearchBar = ({handleSubmit}) => {
    //classNames destr..
    const {search_bar_cont,search_bar,btn_search} = styles 

    const [input,setInput] = useState()
    
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
    return (
    <form className={search_bar_cont} onSubmit={(e)=>handleSubmit(e,input)}>
    <input type='text' placeholder='Search for any IP address or domain' className={search_bar} onChange={handleInput}/>
    <button type='submit' className={btn_search}><img src={arrow} alt='search'/></button>
    </form>
  )
}

export default SearchBar