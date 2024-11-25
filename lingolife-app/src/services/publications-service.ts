import { IPublication, ICreatePublication } from '../shared/interfaces.tsx';

const apiUrl = 'https://lingolifeapi.onrender.com/forum/publication';

export const fetchPublications = async (): Promise<IPublication[]> => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar publicações:', error);
        throw error; // Repropaga o erro para tratamento posterior
    }
};

export async function createPublications(data: ICreatePublication): Promise<void> {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updatePublication(id: string, data: ICreatePublication): Promise<ICreatePublication> {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: ICreatePublication = await response.json();
        return result;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

export async function deletePublication(id: string): Promise<void> {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Delete Success:', result);
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}