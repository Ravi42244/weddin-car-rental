'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"

const TopPickCars = ({topPickCars}) => {

const leftScroll= () =>{
  let element = document.getElementById('topPickCarsSection')
element.scrollLeft = element.scrollLeft - 500
} 
const rightScroll= () =>{
  let element = document.getElementById('topPickCarsSection')
element.scrollLeft = element.scrollLeft + 500
} 





return (




    <div className="">
      <div id="topPickCarsSection" className="p-5 w-full no-scrollbar flex overflow-x-auto scroll whitespace-nowrap !scroll-smooth scrollbar scroll-pl-10 snap-mandatory snap-x hover:snap-start relative transition ease-in-out duration-150">


{
  topPickCars.map((topPickCar,index)=>(

<Card className="w-[300px] cursor-pointer  mx-[15px] shadow-lg group snap-start hover:scale-110 transition ease-in-out delay-150 duration-300" key={index}>
<CardContent>

  
    
    <div className="w-[250px] mt-7 flex justify-center items-center">
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={topPickCar.image}
        alt={topPickCar.name}
        fill={true}
        className="rounded-md object-cover"
      />
    </AspectRatio>



</div>










  </CardContent>
  <CardHeader>
    <CardTitle>{topPickCar.name}</CardTitle>
    <CardDescription>{topPickCar.discription}</CardDescription>
  </CardHeader>
  
  <CardFooter>
    <Badge variant="outline" className="w-auto flex justify-center items-center shadow group-hover:bg-yellow-600 group transition ease-in-out delay-150 duration-300">


    <p className="text-lg mx-2 px-5 transition ease-in-out duration-150"><span className="text-green-700 text-md font-bold transition ease-in-out delay-150 duration-300">{topPickCar.currency}</span> <span className="group-hover:text-white transition ease-in-out delay-150 duration-300">{topPickCar.price}</span></p>
    </Badge>
  </CardFooter>
</Card>

  ))
}








  </div>


  <button className="absolute bottom-0 left-0 -mb-80 shadow-md ml-[235px] transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={()=>{
    leftScroll()
  }}>&lt;</button>


<button className="absolute bottom-0 right-0 -mb-80 shadow-md mr-[230px]  transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={()=>{
    rightScroll()
  }}>&gt;</button>
</div>
    
  )
}

export default TopPickCars
