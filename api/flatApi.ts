
import { Flat } from '@/types';
import axiosInstance from './axios';


export const createFlat = async (
    title: string,
    location: string,
    duration: string,
    bed: string,
    residentType: string,
    description: string,
    address: string,
    rent: string,
    area: string,
    utilitiesIncluded: string,
    images: string,
): Promise<string[]> => {
    // console.log('Sending createUser request:', { name, email });
    const response = await axiosInstance.post('/flats', {
        title,
        location,
        duration,
        bed,
        residentType,
        description,
        address,
        rent,
        area,
        utilitiesIncluded,
        images
    });
    // console.log('createUser response from server:', response.data);
    return response.data;
};


export const getAllFlats = async (): Promise<Flat> => {
    const response = await axiosInstance.get(`/flats`);
    return response.data;
};

