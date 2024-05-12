import { useEffect, useState } from "react";

function useCurrencyInfo(curr){
    const [data, setData] = useState({})
        useEffect(() =>{
            fetch(`https://latest.currency-api.pages.dev/v1/currencies/${curr}.json`)
            .then((res)=> res.json())
            .then((res) => setData(res[curr]))
        },[curr])
        console.log(data)
        return data
}

export default useCurrencyInfo