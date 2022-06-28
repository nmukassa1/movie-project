import Loading from "../utilities/Loading";
import Render from "../utilities/Render";
import useFetch from "../utilities/useFetch";

function Movie() {

    const apiKey = '335228310c6b751750199c1a453b7347';
    const trendingMovie = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1}`;

    const {
        data,
        baseUrl, backdropSize, isPending
    } = useFetch(trendingMovie)
    

    //Posting to storage so I can render the default information in 
    //the dropdown menu when page is loaded

    //Data will be going to DropsownButton component
    const postFirstDataToStorage = async () => {

        const defaultDataRes = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=${apiKey}&language=en-UK`)

        const defaultData = await defaultDataRes.json()

        const defaultTrailerRes = await fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?api_key=${apiKey}&language=en-UK`)

        const defaultTrailer = await defaultTrailerRes.json()

        localStorage.setItem('info', JSON.stringify(defaultData))
        localStorage.setItem('trailerInfo', JSON.stringify(defaultTrailer))
        localStorage.setItem('media', 'movie')
    }

    {data && postFirstDataToStorage()}


    

 

    return ( 
        <>
            {data && <Render data={data} baseUrl={baseUrl} backdropSize={backdropSize} media={'movie'} />}

            {isPending && <Loading />}
        </>
    );
}

export default Movie;