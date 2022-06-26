import Loading from "../utilities/Loading";
import Render from "../utilities/Render";
import useFetch from "../utilities/useFetch";

function Tv() {

    const apiKey = '335228310c6b751750199c1a453b7347';
    const trendingTv = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=1}`;

    const {
        data,
        baseUrl, backdropSize, isPending
    } = useFetch(trendingTv)


    const postFirstDataToStorage = async () => {

        const res = await fetch(`https://api.themoviedb.org/3/tv/${data.results[0].id}?api_key=${apiKey}&language=en-UK`)

        const x = await res.json()

        localStorage.setItem('info', JSON.stringify(x))
        localStorage.setItem('media', 'tv')
    }

    {data && postFirstDataToStorage()}
    

    return ( 
        <>
            {data && <Render data={data} baseUrl={baseUrl} backdropSize={backdropSize} media={'tv'} />}

            {isPending && <Loading />}
        </>
    );
}

export default Tv;