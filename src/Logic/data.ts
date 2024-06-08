// Variable para almacenar los datos en caché
let cachedData: Response[] | null = null;

export const fetchResponses = async (): Promise<Response[]> => {
    // Verificar si los datos ya están en caché
    if (cachedData) {
        return cachedData;
    }

    try {
        const response = await fetch('https://backtryv5.onrender.com/api/responses/all');
        const data: Response[] = await response.json();

        // Guardar los datos en caché
        cachedData = data;

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// Función para limpiar la caché (opcional)
export const clearCache = () => {
    cachedData = null;
};

// Evento para limpiar la caché cuando la página se recarga
window.addEventListener('beforeunload', clearCache);