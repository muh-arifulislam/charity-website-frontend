type PropsType = {
  direction: "vertical" | "horizontal";
};

const Divider = ({ direction }: PropsType) => {
  let cssStyles: string = "";

  if (direction === "vertical") {
    cssStyles = "w-[1px] min-h-[21px] h-full";
  } else {
    cssStyles = "w-full h-[1px]";
  }

  return <div className={`${cssStyles} bg-accent hidden md:block`}></div>;
};

export default Divider;
