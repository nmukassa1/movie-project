import { useState, useEffect } from "react";
import RenderDropdown from "./RenderDropdown";


function Dropdown({isDropdownOpen, data, media}) {

    const hide = ' translate-x-full';
    const show = '';

    const apiKey = '335228310c6b751750199c1a453b7347';
    const imgApi = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

    const [imgUrl, setImgURL] =useState(null)

    const getImgUrl = async () => {
        const res = await fetch(imgApi)
        const imgData = await res.json()

        setImgURL(imgData.images.base_url + imgData.images.backdrop_sizes[3] + data.backdrop_path)
    }

    // getImgUrl()

    const [trailer, setTrailer] = useState(null)

    const getTrailer = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/${media}/${data.id}/videos?api_key=${apiKey}&language=en-UK`)

        const vidData = await res.json()
        setTrailer(vidData)
        // console.log(trailer)
    }
    // getTrailer()

    {data && (getImgUrl())}
    // {data && (getTrailer())}

    // useEffect(() =>{
    //     {data && getTrailer()}
    // }, [])

    
    
    return ( 
        <div id="menu" className={`
            h-full 
            transition-all 
            duration-700 
            z-10 
            bg-black/70
            fixed 
            top-0 
            right-0
            md:w-[40%]
            text-white px-6
            pt-[60px] backdrop-blur-sm
            ${isDropdownOpen ? show : hide}`} >

                {data && 
                    // <div id="hero" className="relative w-[70%] mx-auto">
                    //     <h1 className="absolute z-10 bottom-6 left-6 w-[60%]">{data.title || data.name}</h1>
                    //     <img src={imgUrl} alt="" />
                    // </div>
                    <RenderDropdown title={data.title || data.name} img={imgUrl} overview={data.overview} media={media} vid={trailer}/>
                }
        </div>
    );
}

export default Dropdown;