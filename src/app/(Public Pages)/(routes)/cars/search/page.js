

const search = () => {
    const  searchkey="hyundai aura s"
    const capatlizedSearchKey = (searchkey.split(" ")).map((word)=>
    {
      
    let  firstAlpha = word.charAt(0)
    
    let lowerCase=word.slice(1)
    
      return(
        (firstAlpha.toUpperCase())+lowerCase
       
    )}).join(" ")
    
        
      
  return (
    <div className="w-full flex  ">

    {/* Filter Bar */}
    <div className="w-1/6  flex justify-center items-center ">
Filter Bar

    </div>
    {/* Searching Key */}
    <div className="w-full border-l " >
<h1 className="text-2xl p-10 ">{capatlizedSearchKey}</h1>
</div>
    </div>
  )
}

export default search
