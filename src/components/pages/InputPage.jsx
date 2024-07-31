import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import ColorPicker from "../ColorPicker";
import InputForm from "../InputForm";
import TextArea from "../TextArea";

//Screen size determination
function useResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height };
}

function InputSection({
  setters,
  handleChange,
  formData,
  hexColor,
  rgbColor,
  hslColor,
  handleClick,
  usageEmpty,
}) {
  //Defining options for ColorPicker
  let options = {
    width: 400 /*380*/,
    /* height: 380,*/
    borderWidth: 4,
    borderColor: "#ffffff",
  };

  //Defining options for screen
  const screen = {
    sm: 460,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  //Get the screen size
  const size = useResize();

  //Conditions for determining the ColorPicker size
  if (
    size.width < screen.sm ||
    (size.height < screen.md &&
      size.width >= screen.lg &&
      size.width < screen.xl)
  ) {
    options.width = 260;
  } else if (size.width < screen.md || size.height < screen.md) {
    options.width = 330;
  }

  return (
    <main>
      <section className='bg-input-page bg-cover bg-center w-full h-full lg:h-[calc(100vh-60px)] py-16 lg:py-0 border-y border-secondary-color animate-slideIn flex items-center'>
        <div className='relative h-[80%] w-full flex items-center gap-9 text-sm xl:text-base text-center text-primary-dark'>
          <Wrapper>
            <div className='absolute inset-0 top-8 bg-custom-mobile-gradient lg:bg-custom-gradient'></div>
            <div className='flex flex-wrap items-center'>
              <div className='z-10 lg:w-1/2 flex flex-col items-center w-full'>
                <ColorPicker options={options} setters={setters} />
                <InputForm hexColor={hexColor} />
              </div>
              <div className='z-10 lg:w-1/2 flex flex-col gap-2'>
                <TextArea
                  handleChange={handleChange}
                  handleClick={handleClick}
                  formData={formData}
                  usageEmpty={usageEmpty}
                  hexColor={hexColor}
                  rgbColor={rgbColor}
                  hslColor={hslColor}
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </section>
    </main>
  );
}

export default InputSection;
