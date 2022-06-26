import {useState, useEffect} from 'react'

function useFetch(url, media){
    
    const apiKey = '335228310c6b751750199c1a453b7347';
    const imgApi = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

    const [data, setData] = useState(null)
    const [baseUrl, setBaseUrl] = useState(null)
    const [backdropSize, setBackdropSize] = useState(null)

    const [isPending, setIspending] = useState(true)

    useEffect(() => {
        const getMedia = async () =>{
            const res = await fetch(url);
            const data = await res.json();

            setData(data)
            setIspending(false)

            const imgRes = await fetch(imgApi)
            const imgData = await imgRes.json()
                    

            const baseUrl = imgData.images.base_url;
            // const backdropSize = imgData.images.poster_sizes[3];
            const backdropSize = imgData.images.backdrop_sizes[3];

            setBaseUrl(baseUrl)
            setBackdropSize(backdropSize)

          
            
        }

        getMedia()
    }, [])

    return {data, baseUrl, backdropSize, isPending}
}

export default useFetch