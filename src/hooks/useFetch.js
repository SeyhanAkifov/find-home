import { useState, useEffect } from 'react';

const useFetch =  (url, token, currentPage) => {
    const [state, setState] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
 

    useEffect(() => {
        fetch(url,{
            headers : {
                Authorization: `Bearer ${token}`
               },
              
            }).then((res) => res.json())
        .then(
          (result) => {
          setIsLoaded(true);
          setState(result);
          },
        // Note: it's important to handle errors here
        // instead of Link catch() block so that we don't swallow
        // exceptions from actual bugs in components.
          (error) => {
          setIsLoaded(true);
          setError(error);
          }
        );

        
    }, [url, token, currentPage])

    return [
        state,
        error,
        isLoaded
    ];
}

export default useFetch;