import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';


function Footer() {

    const [url, setUrl] = useState("https://api.quotable.io/random")

    const { data: quote, isLoading, isError} = useQuery({
        queryKey: ['joke'],
        queryFn: async () => {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
        },
    })



    return (
        <div>
            <footer>
            {quote === undefined ? null :<p>{quote.content}</p>}
            <p>...</p>
            {quote === undefined ? null :<p>{quote.author}</p>}
            </footer>
        </div>
    );
}

export default Footer;