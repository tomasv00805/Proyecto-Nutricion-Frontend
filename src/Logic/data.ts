
export const fetchResponses = async (): Promise<Response[]> => {
    try {
      const response = await fetch('https://backtryv5.onrender.com/api/responses/all');
      const data: Response[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };