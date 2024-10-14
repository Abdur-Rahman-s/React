import React from "react";
import Illustration from "../../assets/illustration-hero.svg";

export function HeroSection() {
    return (
        <>
            <section >
                <div className=" container flex items-center justify-around " >
                    <div>
                        <h1>A Simple Bookmark Manager</h1>
                        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                        <div>
                            <button>Get it on Chrome</button>
                            <button>Get it on Firefox</button>
                        </div>
                    </div>
                    <div>
                        <img src={Illustration} alt="Illustration" className="" />
                        <div className="h-[250px] w-[600px] absolute top-96 bottom-0 right-0 rounded-l-[150px] -z-40 " style={{ backgroundColor: 'hsl(231, 69%, 60%)' }}  ></div>
                    </div>
                </div>
            </section>
        </>
    );
}
