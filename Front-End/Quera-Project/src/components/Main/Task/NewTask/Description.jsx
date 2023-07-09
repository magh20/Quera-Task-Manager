

export function Description({val,setVal}) {
   

  return (
    <>
        <textarea  type="text" name="descriptionTask" 
        className="w-full h-[200px] border-1 border-gray-300 rounded-xl font-dana text-end px-4 outline-none break-words pt-4 resize-none"
        placeholder="توضیحاتی برای این تسک بنویسید" 
        wrap="normal"
        onChange={(e)=>{setVal(e.target.value)}}
        value={val}
        ></textarea>
    </>
  )
}
