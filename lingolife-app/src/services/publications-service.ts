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