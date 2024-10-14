import React from "react";
import "./Nav.css"
import Logo from "../../assets/logo-bookmark.svg"


export function Navbar() {
    return(
        <>
            <header>
                <nav className="h-[60px] mt-8 " >
                    <div className="flex justify-around items-center lg:gap-x-[30vw]" >
                        <div>
                            <a href="#"><img src={Logo} alt="" /></a>
                        </div>
                        <div className="md:flex hidden md:gap-10 md:items-center  " >
                            <ul className="flex gap-10  ">
                                <li className="hover:text-[hsl(0,94%,66%)] active:text-[hsl(0,94%,66%)]" ><a href="#">FEATURES</a></li>
                                <li className="hover:text-[hsl(0,94%,66%)] active:text-[hsl(0,94%,66%)]" ><a href="#">PRICING</a></li>
                                <li className="hover:text-[hsl(0,94%,66%)] active:text-[hsl(0,94%,66%)]" ><a href="#">CONTACT</a></li>
                            </ul>

                            <button className="h-10 w-24 text-white rounded-md bg-[#5368DF] hover:bg-transparent hover:border-2 hover:border-[hsl(0,94%,66%)] hover:text-[hsl(0,94%,66%)] hover:transition-all hover:ease-in ">LOGIN
                            </button>

                        </div>
                        <div className="block md:hidden cursor-pointer" >
                            <span class="material-symbols-outlined">
                                menu
                            </span>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}