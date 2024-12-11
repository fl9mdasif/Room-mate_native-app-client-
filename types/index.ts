// src/types/index.ts

export interface Flat {
    _id: string;
    title: string;
    location: string;
    duration: string;
    bed: number;
    residentType: string;
    description: string;
    address: string;
    rent: number;
    area: string;
    securityDeposit: number;
    utilitiesIncluded: number;
    images: string;
}

export interface User {
    clerkId?: string;
    name: string;
    email: string;
    favoriteFlats: Flat[];
}
