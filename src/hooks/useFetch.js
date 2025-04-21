import { useState, useEffect } from "react";

const useFetch = (url, token, currentPage) => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setState(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url, token, currentPage]);

  return [state, error, isLoaded];
};

export default useFetch;

