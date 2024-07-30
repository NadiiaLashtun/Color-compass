import React from "react";
import ImageGenerator from "../ImageGenerator";
import DisplayColours from "../DisplayColours";
import Wrapper from "../Wrapper";
import ResultImg from "/src/img/result-img.png";
import DisplayCircleColour from "../DisplayCircleColor";

function ResultsSection({ colors, prompt }) {
  return (
    <section className='animate-sladeIn bg-result-page bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y border-secondary-color content-center'>
      <div className='relative w-full h-[85%] flex items-end text-sm xl:text-base text-primary-dark'>
        <div className=' w-[64%] h-[87%] bg-primary-white overflow-y-auto py-6 pl-20 pr-10 mb-[1.5%] content-center '>
          <h2 className='absolute top-0 left-[32%] -translate-x-1/2 font-caption text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-brand-red'>
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
              <DisplayColours key={color.hex} color={color} />
            ))}
          </div>
        </div>

        <div className='relative w-[36%] h-full'>
          <img
            src={ResultImg}
            className='w-full h-full bg-contain shadow-shape rounded-l-xl'
            alt='Flowers'
          />

          <div className='absolute top-0 left-0 bottom-0 flex flex-col gap-[4%] justify-center flex-wrap px-8 pl-8'>
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

/*<section className='animate-sladeIn bg-result-page bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y border-secondary-color animate-slideIn'>
      <div className='flex flex-col md:flex-row w-full my-20 '>
        <div className='w-full md:w-1/2 bg-white my-20 py-20'>
          <h2 className='font-caption items-center text-center text-2xl md:text-3xl lg:text-[70px] text-brand-red results-title'>
            Color Compass
          </h2>
          <div className='flex flex-col items-center'>
            {/*<h3 className='text-center w-full pb-4'>
              Thank you for choosing Color Compass.
            </h3>
            <p className='text-center w-full pb-4'>
              <strong>{prompt}</strong>
            </p>
          </div>
          <div className='flex flex-col gap-6 ps-36'>
            {colors.map((color) => (
              <DisplayColours key={color.hex} color={color} />
            ))}
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          {/*<ImageGenerator prompt={prompt} colors={colors} />

          
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
*/
