
import { User } from '@/types';
import axiosInstance from './axios';


export const createUser = async (name: string, email: string): Promise<string[]> => {
    // console.log('Sending createUser request:', { name, email });
    const response = await axiosInstance.post('/users/newUser', { name, email });
    // console.log('createUser response from server:', response.data);
    return response.data;
};


export const addFlatToFavorite = async (email: string, flatId: string): Promise<User> => {
    const response = await axiosInstance.post(`/users/addFavorites`, {
        email, flatId
    });
    return response.data;
};

export const getFavoriteFlats = async (email: string): Promise<User> => {
    const response = await axiosInstance.get<{ user: User }>(`/users/myProfile`, {
        params: { email }, // Pass email as query paramw
    });
    return response.data.user;
};


export const removeFromFavorite = async (email: string, flatId: string): Promise<any> => {
    const response = await axiosInstance.delete<{ user: User }>('/users/removeFromFavorites', {
        data: { email, flatId }, // Pass the body data in the `data` property
    });
    return response.data; // Returns updated favorite flats
};
