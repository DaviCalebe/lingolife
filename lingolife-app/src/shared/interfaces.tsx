export interface IBaseCard {
    name: string;
    profile_image?: string,
    language: string;     
    buttonText?: string; 
}

export interface IPublication extends IBaseCard {
    _id: string,
    title: string,
    content: string,
    fileSrc?: File | null,
    language: string,
    createdAt: string;
    updatedAt: string;
}

export interface ICreatePublication {
    title: string;
    content: string;
    language: string;
    fileSrc?: File | null; // Optional
}