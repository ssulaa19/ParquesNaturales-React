import React from 'react';

// Custom hook para traer datos desde una URL
export function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                const result = await response.json();
                setData(result.comunidades);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Custom hook para traer parques por ID de comunidad
export function useFetchParqueID(id) {
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(``);
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                const result = await response.json();
                setData(result.parques);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}