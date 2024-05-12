import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";
const useGet=(endPoint)=>{
    const [data,setData]=useState();
    const [loading,setLoading]=useState();
    useEffect(()=>{
        axios.get(`${config.baseUrl}/${endPoint}`)
        .then((res)=>{
            // @ts-ignore
            setLoading(false);
            setData(res.data);
            console.log(res);
        })
        .catch((err)=>{
            // @ts-ignore
            setLoading(true)
            console.log(err);})
    },[]);
    return[data,loading];
}
export default useGet;