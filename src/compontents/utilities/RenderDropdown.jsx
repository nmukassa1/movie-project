function RenderDropdown({title, img, overview}) {
    return ( 
        <>
            <div id="hero" className="relative w-[90%] mx-auto">
                <h1 className="absolute z-10 bottom-6 left-6 w-[60%]">{title}</h1>
                <img src={img} alt="" />
            </div>

            <hr className="my-7"/>

            <div id="overview">
                <p>{overview}</p>
            </div>
        </>
    );
}

export default RenderDropdown;