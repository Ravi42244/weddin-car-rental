'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { BsHeart, BsHeartFill } from "react-icons/Bs"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"





function SearchResultCarsDisplay({cars,className})  {
  const [favouriteCars, setFavouriteCars] = useState([])

  return (
   
    <div className={cn(" p-5 lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-6  transition ease-in-out duration-150 ",className)} >


{
cars.map((car,index)=>(

<Card className="lg:w-[300px] w-[300px] cursor-pointer my-5 mx-[15px] shadow-lg group hover:scale-110 transition ease-in-out delay-150 duration-300" key={index}>
<CardContent>


  
  <div className="lg:w-[250px]  mt-7 flex justify-center items-center">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <Image
      src={car.image}
      alt={car.name}
      fill={true}
      className="rounded-md object-cover"
    />
  </AspectRatio>



</div>










</CardContent>
<CardHeader>
  <CardTitle><span className="text-lg lg:text-2xl">{car.name}</span></CardTitle>
  <CardDescription><span className="text-xs lg:text-base">{car.discription}</span></CardDescription>
</CardHeader>

<CardFooter >
  <div className="flex w-full justify-between items-center">

  
  <Badge variant="outline" className="w-auto  flex justify-center items-center shadow group-hover:bg-yellow-400 group transition ease-in-out delay-150 duration-300">


  <p className="text-lg  mx-2 lg:px-5 transition ease-in-out duration-150"><span className="text-green-700 text-md font-bold transition ease-in-out delay-150 duration-300">{car.currency}</span> <span className="group-hover:text-white transition ease-in-out delay-150 duration-300">{car.price}</span></p>
  </Badge>
  <div className="relative flex justify-center items-center -mt-6" onClick={()=>{
  
  if(favouriteCars.includes(index)){
   
setFavouriteCars(favouriteCars.filter((favCar)=>(index!=favCar)))

   return
  }
  

  setFavouriteCars([index,...favouriteCars])
  console.log(favouriteCars)
}}>
<BsHeartFill className={cn(" absolute top-0 right-0 ", favouriteCars.includes(index) ? "text-red-500" : "text-transparent")} size={25} />
  <BsHeart size={25} className="text-red-500  absolute  top-0 right-0 "/>
  </div>
  </div>
</CardFooter>
</Card>

))
}








</div>

  )
}

export default SearchResultCarsDisplay
