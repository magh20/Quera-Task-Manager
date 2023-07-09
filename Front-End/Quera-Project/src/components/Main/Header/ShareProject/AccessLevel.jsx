/* eslint-disable react/prop-types */

export const AccessLevel = ({levelaccess, description, AccValue}) => {

    return(
        <article className=" flex flex-col cursor-pointer items-end gap-2" onClick={()=>AccValue(levelaccess)}>
            <p className="font-dana font-semibold text-xs">{levelaccess}</p>
            <p dir="rtl" className="font-dana font-normal text-[10px]">{description}</p>
        </article> 
    );
}