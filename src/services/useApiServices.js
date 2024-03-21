import { useState, useEffect } from 'react';

export function useApiServices() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data); // Guardar los datos en el estado local
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    return { data };
}

// export default useApiServices;