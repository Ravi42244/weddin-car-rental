'use client'

import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



const Carousel = ({ items }) => {
 const [activeIndex, setActiveIndex] = useState(0);

 const prevSlide = () => {
    setActiveIndex((activeIndex === 0) ? items.length - 1 : activeIndex - 1);
 };

 const nextSlide = () => {
    setActiveIndex((activeIndex === items.length - 1) ? 0 : activeIndex + 1);
 };

 return (
    <div className="h-[800px]">
      {items.map((item, index) => (
        
        <div 
          className={`absolute top-0 left-0 w-full  transition-opacity flex flex-col justify-center items-center duration-500 py-5 my-5   ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          key={index}
        >
       

            <div style={{backgroundImage : `url(${item.image})`}}  className=" w-full h-[800px] bg-center bg-cover rounded blur-lg "/>
            
            <Image src={item.image}  fill={true} className="  drop-shadow object-scale-down " />



            
        </div>
            
        
         
        
      ))}

      <button className="absolute shadow mx-20 left-0 top-1/2 transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={prevSlide}>&lt;</button>
      <button className="absolute shadow mx-20 right-0 top-1/2 transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={nextSlide}>&gt;</button>
      <div className="absolute bottom-0 left-0 flex justify-center items-center bg-transparent w-full">
{items.map((item, index) =>(


<Dot size={index === activeIndex ? 50 : 40} key={index} className={cn(" bg-transparent mx-2 mb-2  cursor-pointer text-xl  text-black/50 transition",`${index === activeIndex && 'text-black' }`)} 
onClick={()=>{
    setActiveIndex(index)

}}/>

))

}
</div>      
    </div>

    
 );
};

export default Carousel;