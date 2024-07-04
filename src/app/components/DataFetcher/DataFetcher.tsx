'use client'
import { useEffect, useState } from 'react';
import { fetchData } from '@/libs/api';


type DataType = {
    // Define the type of your data here
};

const DataFetcher = () => {
    const [data, setData] = useState<DataType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData('http://localhost:8800/api/restaurant/menu');
                setData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        getData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataFetcher;
