import {useState} from 'react'

function Render({data, baseUrl, backdropSize, media}) {
    const apiKey = '335228310c6b751750199c1a453b7347';

    const results = data.results
    
    const [defaultLoad, setDefaultLoad] = useState(results[0])


    // const defaultLoad = results[0];
    const list = results.slice(0);

    const img = baseUrl + backdropSize


    const getDetails = async (e) => {
        const target = e.target

        const res = await fetch(`https://api.themoviedb.org/3/${media}/${target.id}?api_key=${apiKey}&language=en-UK`)

        const data = await res.json()

        setDefaultLoad(data)
        
        localStorage.setItem('info', JSON.stringify(data))
    }

    return ( 
        <section className="h-screen relative text-white">
           <div id="background" className="h-screen relative pl-[60px] pt-[180px]">
                <h1 className='font-bold text-4xl w-[60%]'>{defaultLoad.title || defaultLoad.name}</h1>

                <div id="rating">
                    <span>
                        Rating: {Math.floor(defaultLoad.vote_average)}
                    </span>
                </div>

                <img 
                        id="bg-img" 
                        src={img + defaultLoad.backdrop_path} 
                        alt="" 
                        className="fixed z-[-1] top-0 left-0 object-cover h-full w-full brightness-75"    
                    />
           </div>


            <div id="carousel" className="absolute bottom-0 left-0 flex h-[17vh] text-xs overflow-y-hidden overflow-x-scroll w-screen px-[60px]">
                {
                    list.map(item => (
                        <button key={item.id} id={item.id} className="shrink-0 w-[202px] relative" onClick={(e) => getDetails(e)}>

                            <h1 className='absolute z-[1] text-right w-[80%] bottom-6 right-6 font-bold'>{item.title || item.name}</h1>

                            <img src={img + item.backdrop_path} alt="" className="brightness-50 pointer-events-none"/>

                        </button>
                    ))
                }
            </div>
        </section>
    );
}

export default Render;