export const nullObjectRemover = (obj)=>{
    const newObj={}
    for (const [key, value] of Object.entries(obj)) {
      if(value != null)
      newObj[key]=value
  
    }
    return newObj
  
  }