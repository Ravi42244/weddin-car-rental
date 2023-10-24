'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Currency, DollarSign, TrendingUp } from "lucide-react"
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




    <div>
      <div id="topPickCarsSection" className="p-5 w-full  flex overflow-x-scroll scroll whitespace-nowrap !scroll-smooth scrollbar scrollbar-thumb-yellow-400 scrollbar-track-yellow-500/20 scroll-pl-10 snap-mandatory snap-x hover:snap-start relative transition ease-in-out duration-150">


{
  topPickCars.map((topPickCar,index)=>(

<Card className="w-1/3 cursor-pointer  mx-[15px] shadow-lg group snap-start" key={index}>
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
    <Badge variant="outline" className="w-auto flex justify-center items-center shadow group-hover:bg-black group transition ease-in-out duration-150">


    <p className="text-lg mx-2 px-5 transition ease-in-out duration-150"><span className="text-green-700 text-md font-bold transition ease-in-out duration-150">{topPickCar.currency}</span> <span className="group-hover:text-white transition ease-in-out duration-150">{topPickCar.price}</span></p>
    </Badge>
  </CardFooter>
</Card>

  ))
}








  </div>


  <button className="absolute bottom-0 left-0 -mb-80 shadow ml-[235px] transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={()=>{
    leftScroll()
  }}>&lt;</button>


<button className="absolute bottom-0 right-0 -mb-80 shadow mr-[230px]  transform -translate-y-1/2   bg-white opacity-40 hover:opacity-100 text-black font-bold rounded-full w-12 h-12 hover:text-white hover:bg-black/50 focus:outline-none" onClick={()=>{
    rightScroll()
  }}>&gt;</button>
</div>
    
  )
}

export default TopPickCars
