export const Tagcolors = ({ showcolors,TagColorChange,id }) => {
  const colors = [
    "#E46161",
    "#80DC69",
    "#76BC86",
    "#78C6B0",
    "#84C6A1",
    "#B9995E",
    "#EC8182",
    "#E57A57",
    "#F1A25C",
    "#F3C567",
    "#6DAFCE",
    "#3C45E7",
    "#74AADD",
    "#6897C2",
    "#E28A60",
    "#46494D",
    "#5F6C7C",
    "#486774",
    "#C074D1",
    "#9286EA",
  ];
  return (
    <article
      dir="ltr"
      style={{ display: showcolors ? "grid" : "none" }}
      className=" w-[123px] justify-center items-center h-[109px] rounded-lg cursor-default bg-white shadow-lg absolute grid gap-y-[11px]  gap-x-2 grid-rows-4 grid-cols-5 p-2"
    >
      {colors.map((item, i) => {
        return (
          <input
            type="radio"
            key={i}
            name="colors"
            value={item}
            onChange={(e)=>TagColorChange(id,e.target.value)}
            style={{ backgroundColor: item }}
            className={`h-[15px] cursor-pointer checked:ring-opacity-60 checked:ring-2 checked:scale-105 checked:ring-black rounded-sm appearance-none w-[15px] `}
          />
        );
      })}
    </article>
  );
};
