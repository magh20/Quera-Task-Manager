/* eslint-disable no-unused-vars */


export function ProjectInput({boards,selectedBoard,setSelectedBoard}) {
   

  return (
    <>
        <select value={selectedBoard}onChange={(e)=>setSelectedBoard(e.target.value)} className="mx-2 w-[158px] h-[33px] border-1 border-gray-300 rounded-md  pr-1 text-base font-normal text-gray-800 font-dana" name="project-select" dir="rtl">
           
              {
                boards.map((item)=>{
                 return  <option value={item._id} key={item._id}    >{item.name}</option>
                })
              }
                
           
        </select>
    
    </>
  )
}
