import { IForumCard } from '../components/forum-card/forum-card.tsx';

const apiUrl = 'http://127.0.0.1:5000/forum/publication';

export const fetchPublications = async (): Promise<IForumCard[]> => {
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

export async function createPublications(data: IForumCard): Promise<void> {
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