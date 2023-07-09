export const Profilepicture=({firstname,lastname,size})=>{
    const Abb=lastname ? firstname[0] + " " + lastname[0]:firstname[0] 
    
    return  <article style={size &&{height:size+"px",width:size+'px'}} className={`flex flex-shrink-0 flex-row-reverse rounded-full  bg-yellow-200 justify-center items-center w-[35px]  h-[35px]  font-dana cursor-pointer`}>
    <span className={` text-[80%] flex justify-center items-center`}>{Abb}</span></article>
}