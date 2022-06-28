import { useState, useEffect } from "react";
import RenderDropdown from "./RenderDropdown";


function Dropdown({isDropdownOpen, data, media, trailerInfo}) {

    const hide = ' translate-x-full';
    const show = '';

    const apiKey = '335228310c6b751750199c1a453b7347';
    const imgApi = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

    const [imgUrl, setImgURL] =useState(null)

    const getImgUrl = async () => {
        const res = await fetch(imgApi)
        const imgData = await res.json()

        setImgURL(imgData.images.base_url + imgData.images.backdrop_sizes[3] + data.backdrop_path)
        // console.log(imgUrl)
    }

    // getImgUrl()



    const [trailer, setTrailer] = useState(null)
    

    const getTrailer = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/${media}/${data.id}/videos?api_key=${apiKey}&language=en-UK`)

        const vidData = await res.json()

        let key;

        for(let i = 0; i < vidData.results.length; i++){
            if(vidData.results[i].type === 'Trailer'){
                if(vidData.results[i].site === 'YouTube'){
                    key = vidData.results[i].key
                    break
                }
            }
        }


        const link = `https://www.youtube.com/embed/${key}`;
        setTrailer(link)
        // console.log(trailer)
    }
   
    useEffect(() =>{
        if(data !== null){
            getImgUrl()
            getTrailer()
        }
    }, [data])

   

    
    
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
            overflow-scroll
            ${isDropdownOpen ? show : hide}`} >

                {data && 
                    <RenderDropdown title={data.title || data.name} img={imgUrl} overview={data.overview} media={media} trailer={trailer}/>
                }
        </div>
    );
}

export default Dropdown;