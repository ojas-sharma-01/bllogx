import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import blog_x from "./blogx_icon.svg";
import blog_xd from "./blogx_icond.svg";
import { useState } from 'react';

const App = () => {
    const [ham, setham] = useState(false);

    const [mode, setmode] = useState("light");

    const toggleHam = () => {
        setham(!ham);
    };

    const Ham_menu = () => {
        return(<div className={`flex-col fixed w-[70%] left-0 top-0 ${ham ? 'translate-x-0' : '-translate-x-full'} ease-in-out 
        duration-500 z-10 bg-white border-black h-[100%] shadow-2xl`} id="qq">
        <div className="mx-6 w-[70%] flex items-center
        justify-start font-extrabold text-[30px] mt-4 "
        onClick={toggleHam}>
            <IoMdClose />
        </div>
        <div className="my-4 mx-6 text-[14px] flex items-center
        justify-start border-b-2 border-gray-600 py-4 w-[70%]">
            Featured
        </div>
        <div className="my-4 mx-6 text-[14px] flex items-center justify-start 
        border-b-2 border-gray-600 py-4 w-[70%]">
            Categories
        </div>
        <div className="my-4 mx-6 text-[14px] flex items-center justify-start
        border-b-2 border-gray-600 py-4 w-[70%]">
            Trending
        </div>
        <div className="my-4 mx-6 text-[14px] flex items-center justify-start 
        border-b-2 border-gray-600 py-4 w-[70%]">
            Contact
        </div>
        <div className="my-4 mx-6 text-[14px] flex items-center justify-start
        w-[70%] py-4">
            About Us
        </div>
    </div>
        );
    }

    return (
            <div className={`w-[85%] mx-auto doo flex py-4 border-${(mode === "light" ? "black" 
            : "white")} text-${(mode === "light") ? ("black") : ("white")} border-b-2`}>
                <div className="mx-4 text-[14px] flex md:hidden items-center"
                onClick={toggleHam}>
                    <RxHamburgerMenu />
                </div>
                <Ham_menu />
                <div className="mx-4 text-[14px] hidden md:flex items-center">
                    Featured
                </div>
                <div className="mx-4 text-[14px] hidden md:flex items-center">
                    Categories
                </div>
                <div className="mx-4 text-[14px] hidden md:flex items-center">
                    Trending
                </div>
                <div className="font-semibold text-[20px] flex-1 flex items-center 
                justify-end md:justify-center">
                    Blog
                    <span className="text-[#0096FF]">
                        X
                    </span>
                </div>
                <div className="mx-4 text-[14px] hidden md:flex items-center">
                    Contact
                </div>
                <div className={`mx-4 text-[14px] hidden md:flex items-center border-
                ${(mode === "light" ? "[#333333]" : "white")} rounded-md border-2 py-2 px-4`}>
                    About Us
                </div>
                <div className="mx-4 text-[14px] flex items-center">
                    <img src={blog_x} />
                </div>
            </div>
    );
}

export default App;
