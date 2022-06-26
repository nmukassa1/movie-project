import {useEffect, useRef, useState} from 'react'
import Dropdown from './Dropdown';

function DropdownButton() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const [data, setData] = useState(null)
    const [media, setMedia] = useState(null)

    function openMenu(){
        if(isDropdownOpen === false) {
            setIsDropdownOpen(true)
            setData(JSON.parse(localStorage.getItem('info')))
            setMedia(localStorage.getItem('media'))
            // console.log(data)
        } else{
            setIsDropdownOpen(false)
        } 
    }

    const btnRef = useRef()

    useEffect(() =>{
            function closeDropdown(e){
                if(e.composedPath()[0].id !== btnRef.current.id){

                    setIsDropdownOpen(false)
                }
            }

            document.body.addEventListener('click', closeDropdown)

            return () => document.body.removeEventListener('click', closeDropdown) 
    }, [])

    return ( 
        <>
            <button id='meunBtn' ref={btnRef} onClick={openMenu} className="text-white absolute top-[30px] right-[60px] z-20">
                {isDropdownOpen && <i className="fa-solid fa-xmark pointer-events-none"></i> }
                {!isDropdownOpen && <i className="fa-solid fa-bars pointer-events-none"></i>}
            </button>
            <Dropdown isDropdownOpen={isDropdownOpen} data={data} media={media}/>
        </>
    );
}

export default DropdownButton;