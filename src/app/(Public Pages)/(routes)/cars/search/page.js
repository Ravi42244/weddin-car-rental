"use client"

import SearchResultCarsDisplay from "@/components/SearchResultCarsDisplay"
import { Button } from "@/components/ui/button"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { useState } from "react"


const filters = [
  {
    label: "Model",
    icon: "mode",
    value: ["Maruti", "Hyundai", "Kia"]
  },
  {
    label: "Type",
    value: ["Suv", "Hatch Back"]
  },
  {
    label: "Colour",
    value: ["Red", "Blue", "Yellow", "White"]
  },
  {
    label: "Brand"
  },
  {
    label: "Year"
  },
  {
    label: "Price",
    min_value: 24,
    max_value: 9954,
    currency: '$'
  }

]




const search = () => {



  const searchkey = "hyundai aura s"
  const capatlizedSearchKey = (searchkey.split(" ")).map((word) => {

    let firstAlpha = word.charAt(0)

    let lowerCase = word.slice(1)

    return (
      (firstAlpha.toUpperCase()) + lowerCase

    )
  }).join(" ")

  const SearchedResults = [
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    }, {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    }, {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 62347,
      currency: "€"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 674,
      currency: "€"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 2353634567,
      currency: "$"
    }, {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    }, {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    }, {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 5225,
      currency: "₹"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 62347,
      currency: "€"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 674,
      currency: "€"
    },
    {
      name: "Hyundai Aura",
      model: "S",
      type: "CNG + Petrol",
      color: "White",
      image: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Test Description",
      price: 2353634567,
      currency: "$"
    },]



  return (
    <div className="w-full mt-5 lg:mt-0 flex  z-0 ">

      {/* Filter Bar */}
      <div className="hidden  fixed w-[257px] mt-[145px] p-5 overflow-y-scroll no-scrollbar !scroll-smooth scroll scrollbar border-r  scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 h-screen rounded lg:flex justify-center">
        <div className="flex flex-col w-full h-screen">
          {
            filters.map((filter,index) => (


              <div key={filter.label} className="mb-5 ">
                <h1 className="w-full flex justify-start mt-2 text-yellow-600 text-lg">{filter.label}</h1>
                <div className={cn("w-full  overflow-y-scroll no-scrollbar !scroll-smooth snap-y", filter?.value?.length > 4 ? "h-[150px]" : "h-auto")}>



                  {filter.label != "Price" && filter?.value?.map((value, index) => (
                    <div key={index} className="w-1/2 h-auto mt-2 snap-end" >

                      <Checkbox onCheckedChange={(checked) => {
                        return checked
                      }} className="transition ease-in-out delay-150 duration-300 data-[state=checked]:bg-yellow-500 cursor-pointer" />
                      <Label className="px-2 cursor-pointer">{value}</Label>


                    </div>
                  ))}

                  {
                    filter.label == "Price" && <>
                    

                        <div className="w-full p-3 mt-2 " key={index}>



                          <Slider defaultValue={[50]}
                            max={100}
                            step={1} />


                          
<div className="flex w-full  justify-between items-center mt-5 ">


                         <div className="flex flex-col  justify-center items-center relative" >

                          <Input   className="w-[75px] pl-5  z-0"/>
                          <div className=" absolute bottom-0 left-0 text-base text-green-700 z-40 mb-[26px] ml-[12px]" >$</div>
<Label className="mt-1">Min Price</Label>
                         </div>
                          <div className="flex flex-col  justify-center items-center relative ">

                          <Input  className="w-[75px] pl-5  z-0"/>
                          <div className=" absolute bottom-0 left-0 text-base text-green-700 z-40 mb-[26px] ml-[12px]" >$</div>
                          <Label className="mt-1">Max Price</Label>
                          </div>
                          </div>

                        
                        </div>

                      
                    </>
                  }


                </div>
              </div>
            ))


          }




        </div>
      </div>
      {/* Searching Key */}
      <div className="w-full  lg:ml-64 mt-36 " >
        <div className="lg:fixed w-full bg-white -mt-40 lg:-mt-24 border-l z-50">

          <h1 className="text-3xl p-10 ">{capatlizedSearchKey}</h1>
        </div>
        <div className="w-full flex justify-center -mt-12">

          <SearchResultCarsDisplay cars={SearchedResults} className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-2" />



        </div>
      </div>
    </div>
  )
}

export default search
