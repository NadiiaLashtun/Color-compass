import { useState, useEffect } from "react";
import {
  getComplementaryHSL,
  getAnalogousHSL,
  getTriadicHSL,
} from "../../utils/colorSchemeFunctions";
import { setContrastText } from "../../utils/setContrastText";

export default function InputForm({ hexColor, hslColor, onColorsChange }) {
  //  const initialColors = getAnalogousHSL("#8E216E");
  const [mode, setMode] = useState("analogue");

  const defaultColors = getAnalogousHSL(hslColor);
  const [itemColor1, setItemColor1] = useState(defaultColors[0]);
  const [itemColor2, setItemColor2] = useState(defaultColors[1]);
  // какой режим активный: analogue / triadic / complementary
  const scheme = {
    analogue: getAnalogousHSL,
    triadic: getTriadicHSL,
    complementary: getComplementaryHSL,
  };

  // когда меняется основной цвет (hslColor) или режим — пересчитай
  useEffect(() => {
    if (!hslColor || !mode) return;

    // ищем функцию по ключу
    const colors = scheme[mode.toLowerCase()](hslColor);

    if (mode == "complementary") {
      setItemColor1(colors);
      setItemColor2(null);
      onColorsChange?.(colors, null); //back values to Input page
    } else {
      setItemColor1(colors[0]);
      setItemColor2(colors[1]);
      onColorsChange?.(colors[0], colors[1]); //back values to Input page
    }
  }, [hslColor, mode]);

  return (
    <div className='w-full max-w-[434px] rounded-[20px] bg-primary-color space-y-2.5 my-3 py-2.5 shadow-shape'>
      <div className='flex flex-wrap justify-center mx-2.5 gap-0.5'>
        <div>
          <button
            className='w-[130px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'
            onClick={() => setMode("analogue")}
          >
            Analogue
          </button>
        </div>
        <div>
          <button
            className='w-[130px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'
            onClick={() => setMode("triadic")}
          >
            Triadic
          </button>
        </div>
        <div>
          <button
            className='w-[150px] h-10 bg-transparent rounded-full border-white border-2 hover:shadow-shape hover:border-brand-green hover:text-brand-green transition-all duration-500'
            onClick={() => setMode("complementary")}
          >
            Complimentary
          </button>
        </div>
      </div>
      <div className='flex justify-center mx-2.5 text-primary-white'>
        <div
          style={{ background: itemColor1, color: setContrastText(hexColor) }} // borderRadius: "40px 0 0 40px" }}
          className='flex justify-center items-center w-[140px] h-10 border-white border-2 hex-codes'
        >
          {itemColor1}
        </div>
        <div
          style={{ background: hexColor, color: setContrastText(hexColor) }}
          className={`flex justify-center items-center w-[140px] h-10 border-white border-2  hex-codes ${hexColor}`}
        >
          {hexColor}
        </div>
        <div
          style={{ background: itemColor2, color: setContrastText(hexColor) }} //borderRadius: " 0 40px 40px 0" }}
          className='flex justify-center items-center w-[140px] h-10 border-white border-2 hex-codes'
        >
          {itemColor2}
        </div>
      </div>
    </div>
  );
}
