import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
    // console.log(url)
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setApiData(data);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { isLoading, apiData, serverError };
}

export default useFetch;