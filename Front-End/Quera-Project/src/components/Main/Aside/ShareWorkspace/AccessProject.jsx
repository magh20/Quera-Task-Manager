/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const AccessProject = ({ProValue, levelProject}) => {

    return(
        <article className=" flex flex-col cursor-pointer items-end gap-2" onClick={() => {ProValue(levelProject)}}>
            <p className="font-dana font-semibold text-xs">{levelProject}</p>
        </article> 
    );
}