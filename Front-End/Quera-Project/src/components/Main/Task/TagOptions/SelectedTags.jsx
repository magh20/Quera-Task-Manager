import { Tagdropoptions } from "./TagDropOptions";
import { useRef, useEffect, useState } from "react";
import { Tageditor } from "./TagEdit";
export const SelectedTag = ({ tagname, id ,Tagdelete,TagColorChange,Tagedit,setShowTag,wholeref}) => {
  const dropdown = useRef();
  const [edit,setEdit]=useState(false)
  const [tagOptions, setOptions] = useState(false);
  const newtag=true
  useEffect(()=>{
    const handleclose=(e)=>{
       return !dropdown?.current?.contains(e.target)&& setOptions(false)
    }
    const handleclosewhole=(e)=>{
        
       return !wholeref?.current?.contains(e.target)&& setShowTag(false)
    }
    document.addEventListener("mousedown",handleclosewhole)
    document.addEventListener("mousedown",handleclose)
    return ()=>{document.removeEventListener("mousedown",handleclose),document.removeEventListener("mousedown",handleclosewhole)}
  })

  return ( edit ? <Tageditor id={id} setShowTag={setShowTag} setEdit={setEdit} tag={tagname} Tagedit={Tagedit}/>
    :<span className="cursor-pointer px-2  py-[4.5px] mb-1  rounded-md bg-[#FFAE34]">
      <span
        id={id}
        onClick={() => {
          setOptions(!tagOptions);
        }}
        tabIndex={1}
        onMouseDown={(e)=>{e.preventDefault()}}
        onBlur={()=>{setShowTag(false),console.log(1)}}
      >
        <p id={id} className=" inline font-dana text-[10px]">
          {tagname}
        </p>
      </span>
      <Tagdropoptions
      
      TagColorChange={TagColorChange}
      newtag={newtag}
      setEdit={setEdit}
      Tagdelete={Tagdelete}
      id={id}
        tagOptions={tagOptions}
        dropref={dropdown}
        setOptions={setOptions}
      />
    </span>
  );
};
