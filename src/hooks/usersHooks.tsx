import {useState , useEffect} from "react";
import config from "../config";
import {UserForReturnDto} from "../Types";
import {useQuery} from "react-query";
import axios, {AxiosError} from "axios";

const useFetchUsers = () => {
   return useQuery<UserForReturnDto[],AxiosError>("users",()=>
   axios.get(`${config.baseURL}/api/users`).then((resp)=>resp.data)
   )

}
export default useFetchUsers;