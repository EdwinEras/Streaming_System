import React, { useEffect, useState } from "react";


const Carousel = ({banners, autoSlide}) => {
    const [current, setCurrent] = useState(0);
    const interval = 4000;

    function previous() {
        setCurrent((current) => {
            console.log(current);
            if(current === 0){ 
                return banners.length - 1;
            }else{ 
                return current - 1;
            }
        })
    }
    function next() {
        setCurrent((current) => {
            if(current < banners.length -1){
                return current + 1;
            }else{ 
                return 0;
            }
        })
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, interval)
        return () => clearInterval(slideInterval)
    }, [banners])

    return(
        <div className="flex justify-center items-center bg-black">
        <div className="max-w-lg">
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)` }}>
                {banners.map((s) => (
                   <img 
                        key={s.id} 
                        src={s.img} 
                        alt={`banner_${s.id}`}
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={previous} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {banners.map((s) => (
                        <div key={s.id} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${current === s.id-1 ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Carousel;