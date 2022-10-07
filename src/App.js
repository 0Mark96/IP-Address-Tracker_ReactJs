import { fetchData } from "./clientApi/fetchData";
import { useQuery } from "react-query";
import {useState } from "react";
// component
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
//context
import { createContext } from "react";
export const APIdataContext = createContext();

function App() {
  // Fetch data 
  const [query,setQuery] = useState() // insert auto location 
  const {isLoading, isError, error, data}= useQuery(['ipData',query],()=>fetchData(query))
  const handleSubmit = (e,input) => {
    e.preventDefault()
      setQuery(input)
  }
  
  return (
    <div className="App">
      <APIdataContext.Provider value={{data,isLoading,isError,error}}> 
      <Header handleSubmit={handleSubmit}/>
      <Map />
      </APIdataContext.Provider>
    </div>
  );
}

export default App;
