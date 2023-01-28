import { useEffect } from "react";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd2834b2edbmshd2f7508746aaf79p1ea93ajsn2d94d9e9f36f',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

const useFetch = () => {
    return (
        useEffect(()=> {
            fetch('https://forecast9.p.rapidapi.com/rapidapi/forecast/india/hourly/', options)
	            .then(response => response.json())
	            .then(response => console.log(response))
	            .catch(err => console.error(err.message));
        },[])
    )
}

export default useFetch;