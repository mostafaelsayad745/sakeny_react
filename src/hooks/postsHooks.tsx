import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError , AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { PostForCreationDto, PostForReturnDto, PostForUpdateDto , PostForSerchDto} from "../Types";

const useFetchAllPosts = () => {
   return useQuery<PostForReturnDto[], AxiosError>("allposts", () =>
      axios.get(`${config.baseURL}/api/allposts`).then((resp) => resp.data)
   );
}

const useFetchUserPosts = (userId : number) => {
   return useQuery<PostForReturnDto[], AxiosError>(["users", userId, "posts"], () =>
      axios.get(`${config.baseURL}/api/users/${userId}/posts`).then((resp) => resp.data)
   );
}

const useFetchPost = (userId : number, postId : number) => {
    return useQuery<PostForReturnDto, AxiosError>(["users", userId, "posts", postId], () =>
       axios.get(`${config.baseURL}/api/users/${userId}/posts/${postId}`).then((resp) => resp.data)
    );
 }

const useSearchPost = (postForSearchDto: PostForSerchDto) => {
    return useQuery<PostForReturnDto[], AxiosError>(["SearchForpost", postForSearchDto], () =>
        axios.get(`${config.baseURL}/api/SearchForpost`, {
            params: postForSearchDto
        }).then((resp) => resp.data)
    );
}

const useAddPost = (userId : number) => {
   const nav = useNavigate();
   const queryClient = useQueryClient();
   return useMutation<PostForReturnDto, AxiosError, PostForCreationDto>(
      (post) => axios.post<PostForReturnDto>(`${config.baseURL}/api/users/${userId}/posts`, post)
         .then((response) => response.data),
      {
         onSuccess: (data) => {
            queryClient.invalidateQueries(["users", userId, "posts"]);
            nav(`/users/${userId}/posts/${data.postId}`);
         }
      }
   );
}

const useUpdatePost = (userId : number, postId :number) => {
   const queryClient = useQueryClient();
   return useMutation<PostForReturnDto, AxiosError, PostForUpdateDto>(
      (post) => axios.put<PostForReturnDto>(`${config.baseURL}/api/users/${userId}/posts/${postId}`, post)
         .then((response) => response.data),
      {
         onSuccess: () => {
            queryClient.invalidateQueries(["users", userId, "posts"]);
         }
      }
   );
}

const useDeletePost = (userId :number, postId : number) => {
   const queryClient = useQueryClient();
   return useMutation<AxiosResponse, AxiosError, void>(
      () => axios.delete(`${config.baseURL}/api/users/${userId}/posts/${postId}`),
      {
         onSuccess: () => {
            queryClient.invalidateQueries(["users", userId, "posts"]);
         }
      }
   );
}

const usePartialUpdatePost = (userId : number, postId : number, patchDocument: any) => {
     return useMutation(() =>
         axios.patch(`${config.baseURL}/api/users/${userId}/posts/${postId}`, patchDocument)
     );
 }
 
 const usePartialUpdatePostForStatues = (userId: number, postId: number, patchDocument: any) => {
     return useMutation(() =>
         axios.patch(`${config.baseURL}/api/users/${userId}/posts/${postId}/statues`, patchDocument)
     );
 }

export { useFetchAllPosts, useFetchUserPosts, useAddPost, useUpdatePost, useDeletePost ,
     useFetchPost , useSearchPost , usePartialUpdatePost , usePartialUpdatePostForStatues};
