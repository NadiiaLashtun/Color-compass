import React from "react";
import Wrapper from "../UI/Wrapper";
import DisplayColorDescription from "../result/DisplayColorDescription";
import DisplayCircleColour from "../result/DisplayCircleColor";
import ResultImg from "/src/img/result-img.png";

function ResultsSection({ colors, prompt }) {
  return (
    <section className='bg-result-page bg-contain bg-left-top bg-repeat-y lg:bg-cover bg-primary-color w-full lg:h-[calc(100vh-60px)] content-center animate-slideIn'>
      <div className='relative w-full h-[85%] py-16 lg:py-0 flex flex-col-reverse lg:flex-row items-end'>
        <div className='w-full lg:w-[64%] lg:h-[87%] bg-primary-white overflow-y-auto py-6 px-5 md:px-10 mb-[1.5%]'>
          <Wrapper>
            <h2 className='absolute z-10 top-6 lg:top-0 left-1/2 lg:left-[32%]'>
              Your best choice
            </h2>
            {prompt ? (
              <p className='text-center w-full mb-5'>
                <strong>{prompt}</strong>
              </p>
            ) : (
              ""
            )}
            <div className='flex flex-col justify-center gap-6'>
              {colors.map((color) => (
                <DisplayColorDescription key={color.hex} color={color} />
              ))}
            </div>
          </Wrapper>
        </div>

        <div className='relative w-full h-full lg:w-[36%]'>
          <img
            src={ResultImg}
            className='w-full h-60 sm:h-36 lg:h-full shadow-shape rounded-t-2xl lg:rounded-none lg:rounded-l-2xl border-primary-white border-t-[3px] border-x-[3px] lg:border-l-[3px] lg:border-y-[3px] object-cover '
            alt='Flowers'
          />

          <div className='absolute inset-0 w-full px-[100px] py-7 sm:p-8 flex lg:flex-col gap-[4%] flex-wrap justify-center lg:items-start'>
            {colors.map((color) => (
              <DisplayCircleColour hex={color.hex} key={color.hex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
