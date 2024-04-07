import {useState , useEffect} from "react";
import config from "../config";
import {UserForCreationDto, UserForReturnDto, UserForUpdateDto} from "../Types";
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import { useNavigate } from "react-router-dom";

const useFetchUsers = () => {
   return useQuery<UserForReturnDto[],AxiosError>("users",()=>
   axios.get(`${config.baseURL}/api/users`).then((resp)=>resp.data)
   )

}

const useFetchUser =(id:number)=>{
      return useQuery<UserForReturnDto,AxiosError>(["users" ,id] , ()=>
      
         axios.get(`${config.baseURL}/api/users/${id}`).then((resp)=>resp.data)
      );
}

const useAddUser = () => {
   const nav = useNavigate();
   const queryClient = useQueryClient();
   return useMutation<UserForReturnDto, AxiosError, UserForCreationDto>(
      (user) => axios.post<UserForReturnDto>(`${config.baseURL}/api/users`, user)
         .then((response) => response.data), 
      {
         onSuccess: (data) => {
            queryClient.invalidateQueries("users");
            nav(`/users/${data.userId}`);
         }
      }
   );
}

const useUpdateUser = () => {
   const queryClient = useQueryClient();
   const nav = useNavigate();
   return useMutation<UserForReturnDto, AxiosError, UserForUpdateDto>(
      (user) => axios.put<UserForReturnDto>(`${config.baseURL}/api/users`, user)
         .then((response) => response.data), 
      {
         onSuccess: (data) => {
            queryClient.invalidateQueries("users");
            nav(`/users/${data.userId}`);
         }
      }
   );
}

const useDeleteUser = () => {
   const queryClient = useQueryClient();
   const nav = useNavigate();
   return useMutation<AxiosResponse, AxiosError, UserForReturnDto>(
      (user) => axios.delete(`${config.baseURL}/api/users/${user.userId}`),
      {
         onSuccess: () => {
            queryClient.invalidateQueries("users");
            nav('/users');
         }
      }
   );
}


export default useFetchUsers;
export {useFetchUser , useAddUser , useUpdateUser , useDeleteUser};