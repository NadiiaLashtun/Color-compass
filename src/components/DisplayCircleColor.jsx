import { setContrastText } from "../utils/setContrastText";

function DisplayCircleColour({ hex }) {
  console.log(hex);
  return (
    <div
      className={`rounded-full px-2 py-7 w-[85px] h-[85px] shadow-shape content-center`}
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
