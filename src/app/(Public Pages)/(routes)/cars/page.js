import Carousel from "@/components/Carousel"

import { BsFire } from "react-icons/Bs"



import TopPickCars from "@/components/TopPickCars"


export default function cars() {

  const cars=[
   
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "/hyundai-aura-s.jpg"
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1674110958136-40fd83adc9e3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const topPickCars=[
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "/hyundai-aura-s.jpg",
      discription:"Test Description",
      price: 100,
      currency: "$"   },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1674110958136-40fd83adc9e3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 35352,
      currency: "₹" 
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 100,
      currency: "$" 
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 5225,
      currency: "₹" 
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 62347,
      currency: "€" 
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 674,
      currency: "€" 
    },
    {
      name:"Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color:"White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:"Test Description",
      price: 2353634567,
      currency: "$" 
    },
  ]

  
  return (
   <div className="w-full  relative z-20  h-screen ">
   <div className=" w-full h-screen    ">

      <Carousel items={cars} className=""/>
   </div>
    

      <div className="container w-full ">

{/* Trending Section */}

{/* Trending Heading */}
<div className="flex w-full justify-center p-5">
 
 <div className="flex relative mt-5">
<div className=" -mr-20 bg-red-500 w-[29px] h-[26px] rounded-full "/>

 <BsFire size={50} className="-ml-[10px] -mt-[22px] absolute top-0 left-0 text-yellow-300 mx-5 " />

 </div>

<h1 className="text-4xl px-12">Top Picks</h1>
  

</div>

{/* Treding Cards Section*/}
<TopPickCars topPickCars={topPickCars}/>

<div className="w-full ">

</div>


   </div>
   </div>
)
}