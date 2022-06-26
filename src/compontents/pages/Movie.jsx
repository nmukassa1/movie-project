import Render from "../utilities/Render";
import useFetch from "../utilities/useFetch";

function Movie() {

    const apiKey = '335228310c6b751750199c1a453b7347';
    const trendingMovie = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1}`;

    const {
        data,
        baseUrl, backdropSize, isPending
    } = useFetch(trendingMovie)
    
    const postFirstDataToStorage = async () => {

        const res = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=${apiKey}&language=en-UK`)

        const x = await res.json()

        localStorage.setItem('info', JSON.stringify(x))
        localStorage.setItem('media', 'movie')
    }

    {data && postFirstDataToStorage()}


    

 

    return ( 
        <>
            {data && <Render data={data} baseUrl={baseUrl} backdropSize={backdropSize} media={'movie'} />}
        </>
    );
}

export default Movie;