import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';


function Footer() {

    const [url, setUrl] = useState("https://api.quotable.io/random")

    const { data: quote, isLoading, isError, refetch} = useQuery({
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
            <footer onClick={refetch}>
            {quote === undefined ? null :<p>{quote.content}</p>}
            {quote === undefined ? null :<p>{quote.author}</p>}
            </footer>
        </div>
    );
}

export default Footer;




function findMatch(driversArray, input){
    return match = driversArray.filter(
        (driver) => driver.toLowerCase() === input.toLowerCase()
    )
}



function fuzzyMatch(driversArray, input){
    return match = driversArray.filter(
        (driver) => driver.toLowerCase().indexOf(input.toLowerCase()) === 0
    )
}

fuzzyMatch(driversArray, "s")