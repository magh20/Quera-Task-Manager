/* eslint-disable react/prop-types */
export const ChooseDecide=({showDecide,setShowDecide,selectDecide,id})=>{
    return <div className="relative  flex flex-col items-center">
    <span className="absolute">
      <ul  onMouseDown={(e)=>{e.preventDefault()}}
      
        style={
          showDecide
            ? {display:"flex"}
            : { display:"none"}
        }
        className="w-[107px] transition-all text-xs  flex flex-col gap-[14px]  rounded-lg bg-white drop-shadow-lg   p-2 "
      >
        <li
          onClick={() => {
            setShowDecide(false);
            selectDecide(id,"است");
          }}
          className=" cursor-pointer hover:opacity-70"
        >
          است
        </li>
        <li onClick={() => {
            setShowDecide(false);
            selectDecide(id,"نیست")
          }} 
          className=" cursor-pointer hover:opacity-70">نیست</li>
      </ul>
    </span>
  </div>
}