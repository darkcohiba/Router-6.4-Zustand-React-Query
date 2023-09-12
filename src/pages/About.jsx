import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import Header from '../components/Header'
import Footer from '../components/Footer'
import useFetch from "../hooks/useFetchHook"

function About() {

    const [url, setUrl] = useState("https://opentdb.com/api.php?amount=1")

    const { data: joke, isLoading, isError, refetch} = useQuery({
                                    queryKey: ['joke'],
                                    queryFn: async () => {
                                    const response = await fetch(url)
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok')
                                    }
                                    return response.json()
                                    },
                                })

    // const { isLoading, serverError, apiData } = useFetch(url);


    // setTimeout(()=>{
    //     console.log(apiData.category)
    // }, 2000)
    // const [joke, setJoke] = useState(apiData ?
    //     {
    //         category: apiData.category,
    //         delivery: apiData.delivery,
    //         setup: apiData.setup
    //     } :
    //     {
    //         category: "Joke",
    //         delivery: "Here comes a joke!",
    //         setup: "wait for it"
    //     }
    // )



    
    
    
    // console.log(joke)
    // console.log(serverError)
    // console.log(isLoading)
                                console.log(joke)
    return ( 
        <div>
            <h1>About Page</h1>
            <p>Question</p>
            {joke?.results[0].question}
            {/* {joke === undefined ? null :<p>{joke.setup}</p>} */}
            <h1 onClick={refetch}>...</h1>
            <p>Answer</p>
            {joke?.results[0].correct_answer}
            {/* {joke === undefined ? null :<p>{joke.delivery}</p>} */}

            {/* {setTimeout(()=>{
                {joke === undefined ? null :<p>{joke.delivery}</p>}
            },2000)} */}
        </div>
    );
}

export default About;