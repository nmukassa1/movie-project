import Render from "../utilities/Render";
import useFetch from "../utilities/useFetch";

function Tv() {

    const apiKey = '335228310c6b751750199c1a453b7347';
    const trendingTv = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=1}`;

    const {
        data,
        baseUrl, backdropSize, isPending
    } = useFetch(trendingTv)

    

    return ( 
        <>
            {data && <Render data={data} baseUrl={baseUrl} backdropSize={backdropSize} media={'tv'} />}
        </>
    );
}

export default Tv;