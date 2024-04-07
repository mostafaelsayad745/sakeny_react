import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostForReturnDto , PostForCreationDto} from "../Types";
import axios, { AxiosError } from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";


const useFetchAllPosts = () => {
    return useQuery<PostForReturnDto[], AxiosError>(
       "allposts",
       () => axios.get<PostForReturnDto[]>(`${config.baseURL}/api/users/allposts`)
          .then((response) => response.data) 
    );
 }

 
const useFetchUserPosts = (userId: number) => {
    return useQuery<PostForReturnDto[], AxiosError>(
        ["userPosts", userId],
        ({ queryKey }) => {
            const [_key, userId] = queryKey;
            return axios.get<PostForReturnDto[]>(`${config.baseURL}/api/users/${userId}/posts`)
                .then((response) => response.data);
        }
    );
}

const useFetchUserPost = (userId: number, postId: number) => {
    return useQuery<PostForReturnDto, AxiosError>(
        ["userPost", userId, postId],
        ({ queryKey }) => {
            const [_key, userId, postId] = queryKey;
            return axios.get<PostForReturnDto>(`${config.baseURL}/api/users/${userId}/posts/${postId}`)
                .then((response) => response.data);
        }
    );
}


const useAddUserPost = (userId: number) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<PostForReturnDto, AxiosError, PostForCreationDto>(
        (newPost) => axios.post<PostForReturnDto>(`${config.baseURL}/api/users/${userId}/posts`, newPost)
            .then((response) => response.data),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(["userPosts", userId]);
                navigate(`/users/${userId}/posts/${data.PostId}`);
            },
        }
    );
}







 export default useFetchAllPosts;
 export {useFetchUserPosts}