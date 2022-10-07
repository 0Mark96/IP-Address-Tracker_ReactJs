import axios from "axios";


export const fetchData = (query) => {
    return(
        axios({
            method: "get",
            url: 'https://geo.ipify.org/api/v2/country,city', 
            params:{
                apiKey:process.env.REACT_APP_API_KEY,
                ipAddress:query,
                domain:query
            }
          }).then((response) => response.data)
    )
}

// export const fetchData = (query) => {
//     return(
//     axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_OI8i5aLX20Mx2bKaQhrTFhVSvLXii&ipAddress=${query}&domain=${query}`)
//     .then((response) => response.data)
//     )
// }