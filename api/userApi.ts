
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


export const removeFavoriteFlat = async (userId: string, flatId: string): Promise<string[]> => {
    const response = await axiosInstance.post('/users/removeFromFavorites', { userId, flatId });
    return response.data.favoriteFlats; // Returns updated favorite flats
};
