import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { PostFeedbackForCreationDto, PostFeedbackForReturnDto, PostFeedbackForUpdateDto } from "../Types";

const useFetchPostFeedbacks = (userId : number, postId : number) => {
   return useQuery<PostFeedbackForReturnDto[], AxiosError>(["users", userId, "posts", postId, "postfeedbacks"], () =>
      axios.get(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks`).then((resp) => resp.data)
   );
}

const useFetchPostFeedback = (userId: number, postId: number, feedbackId: number) => {
   return useQuery<PostFeedbackForReturnDto, AxiosError>(["users", userId, "posts", postId, "postfeedbacks", feedbackId], () =>
      axios.get(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks/${feedbackId}`).then((resp) => resp.data)
   );
}

const useAddPostFeedback = (userId: number, postId: number) => {
    const queryClient = useQueryClient();
    return useMutation<PostFeedbackForReturnDto, AxiosError, PostFeedbackForCreationDto>(
      (postFeedback) => 
        axios.post(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks`, postFeedback)
          .then((response) => response.data),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["users", userId, "posts", postId, "postfeedbacks"]);
        }
      }
    );
  }

const useUpdatePostFeedback = (userId: number, postId: number, feedbackId: number) => {
   const queryClient = useQueryClient();
   return useMutation<PostFeedbackForReturnDto, AxiosError, PostFeedbackForUpdateDto>(
      (postFeedback) => 
      axios.put(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks/${feedbackId}`, postFeedback)
         .then((response) => response.data),
      {
         onSuccess: () => {
            queryClient.invalidateQueries(["users", userId, "posts", postId, "postfeedbacks"]);
         }
      }
   );
}

const useDeletePostFeedback = (userId: number, postId: number, feedbackId: number) => {
   const queryClient = useQueryClient();
   return useMutation<AxiosResponse, AxiosError, void>(
      () => axios.delete(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks/${feedbackId}`),
      {
         onSuccess: () => {
            queryClient.invalidateQueries(["users", userId, "posts", postId, "postfeedbacks"]);
         }
      }
   );
}

const usePartialUpdatePostFeedback = (userId: number, postId: number, feedbackId: number, patchDocument: number) => {
   return useMutation<AxiosResponse, AxiosError, PostFeedbackForUpdateDto>(
      () => axios.patch(`${config.baseURL}/api/users/${userId}/posts/${postId}/postfeedbacks/${feedbackId}`, patchDocument)
   );
}

export { useFetchPostFeedbacks, useFetchPostFeedback, useAddPostFeedback, useUpdatePostFeedback, useDeletePostFeedback, usePartialUpdatePostFeedback };
