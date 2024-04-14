import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';



const useFetchPictures = (postId: number) => {
    return useQuery(['posts', postId, 'pictures'], () =>
      axios
        .get(`${config.baseURL}/api/posts/${postId}/pictures`, {
          responseType: 'arraybuffer',
        })
        .then((response) => {
          // Convert the array buffer to a base64 string
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          return `data:image/jpeg;base64,${base64}`;
        })
    );
  };

  const useFetchPicture = (postId: number, picId: number) => {
    return useQuery(['posts', postId, 'pictures', picId], () =>
      axios
        .get(`${config.baseURL}/api/posts/${postId}/pictures/${picId}`, {
          responseType: 'arraybuffer',
        })
        .then((response) => {
          // Convert the array buffer to a base64 string
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          return `data:image/jpeg;base64,${base64}`;
        })
    );
  };

const useUploadPictures = (postId: number) => {
    const queryClient = useQueryClient();
    return useMutation(
      async (picturesForCreation: File[]) => {
        const formData = new FormData();
        picturesForCreation.forEach((file) => {
          formData.append('Images', file);
        });
  
        const response = await axios.post(
          `${config.baseURL}/api/posts/${postId}/pictures`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        return response.data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['posts', postId, 'pictures']);
        },
      }
    );
  };

const useDeletePictures = (postId : number) => {
    const queryClient = useQueryClient();
    return useMutation(() =>
        axios.delete(`${config.baseURL}/api/posts/${postId}/pictures`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["posts", postId, "pictures"]);
            }
        }
    );
}

const useDeletePicture = (postId : number, picId : number) => {
    const queryClient = useQueryClient();
    return useMutation(() =>
        axios.delete(`${config.baseURL}/api/posts/${postId}/pictures/${picId}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["posts", postId, "pictures"]);
            }
        }
    );
}

export { useFetchPictures, useFetchPicture, useUploadPictures, useDeletePictures, useDeletePicture };
