import { setContrastText } from "../utils/setContrastText";

function DisplayCircleColour({ hex }) {
  return (
    <div
      className={`rounded-full w-full p-2 sm:py-7 sm:w-[85px] sm:h-[85px] shadow-shape content-center`}
      style={{
        backgroundColor: hex,
        color: setContrastText(hex),
      }}
    >
      <p className='text-center font-semibold text-base'>{hex}</p>
    </div>
  );
}

export default DisplayCircleColour;
