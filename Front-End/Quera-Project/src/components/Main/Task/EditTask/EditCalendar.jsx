import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-datepicker/dist/react-datepicker.css";


export const Editcalendar=({value,setValue})=>{

    return (
        <div onMouseDown={(e)=>e.preventDefault()} className="absolute" >
             <Calendar
              selected={value}
              className=" h-0 px-4"
              calendar={persian}
              locale={persian_fa}
             value={value}
             onChange={setValue}
            />
        </div>
    )
}