import {useState, useEffect} from 'react'

function useFetchProviders(media, id) {

    const apiKey = '335228310c6b751750199c1a453b7347';

    const [data, setData] = useState(null)
    

    useEffect(() => {
        const fetchProvider = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/${media}/${id}/watch/providers?api_key=${apiKey}`);

            const data = await res.json()
            setData(data)

        }

        fetchProvider()
    }, [])

    return {data}
}

export default useFetchProviders