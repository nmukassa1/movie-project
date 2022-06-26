import {useState} from 'react'
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

    return ( 
        <>
            <button onClick={openMenu} className="text-white absolute   top-[30px] right-[60px] z-20">
                {isDropdownOpen && <i className="fa-solid fa-xmark"></i> }
                {!isDropdownOpen && <i className="fa-solid fa-bars"></i>}
            </button>
            <Dropdown isDropdownOpen={isDropdownOpen} data={data} media={media}/>
        </>
    );
}

export default DropdownButton;