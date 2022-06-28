

function RenderDropdown({title, img, overview, trailer}) {
    
    return ( 
        <>
            <div id="hero" className="relative w-[90%] mx-auto">
                <h1 className="absolute z-10 bottom-6 left-6 w-[60%]">{title}</h1>
                <img src={img} alt="" className="brightness-75"/>
            </div>

            <hr className="my-7"/>

            <div id="overview">
                <p>{overview}</p>
            </div>

            <div id="trailer" className="my-5">
                {trailer && <iframe title="trailer" src={trailer} frameBorder="0" allowFullScreen="true" className="w-full h-[230px]"></iframe>}
                {!trailer && <span className="grid place-content-center w-full h-[200px]">No Trailer was found</span>}
            </div>
        </>
    );
}

export default RenderDropdown;