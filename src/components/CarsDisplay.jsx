'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"





const CarsDisplay = ({cars}) => {
  return (
   
    <div className="p-5 mt-10 grid grid-cols-4 gap-6 transition ease-in-out duration-150 " >


{
cars.map((car,index)=>(

<Card className="w-[300px] cursor-pointer my-5 mx-[15px] shadow-lg group hover:scale-110 transition ease-in-out delay-150 duration-300" key={index}>
<CardContent>


  
  <div className="w-[250px] mt-7 flex justify-center items-center">
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
  <CardTitle>{car.name}</CardTitle>
  <CardDescription>{car.discription}</CardDescription>
</CardHeader>

<CardFooter>
  <Badge variant="outline" className="w-auto flex justify-center items-center shadow group-hover:bg-yellow-600 group transition ease-in-out delay-150 duration-300">


  <p className="text-lg mx-2 px-5 transition ease-in-out duration-150"><span className="text-green-700 text-md font-bold transition ease-in-out delay-150 duration-300">{car.currency}</span> <span className="group-hover:text-white transition ease-in-out delay-150 duration-300">{car.price}</span></p>
  </Badge>
</CardFooter>
</Card>

))
}








</div>

  )
}

export default CarsDisplay
