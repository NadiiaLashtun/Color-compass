import { Link } from "react-router-dom";

function TextArea({ handleClick, handleChange, formData, usageEmpty }) {
  return (
    <>
      <h1 className='absolute -top-9 lg:-top-2 xl:-top-4 left-[50%] lg:left-[72%] -translate-x-1/2 font-caption text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-brand-red'>
        Choose your color
      </h1>

      <p className='w-[80%] mx-auto my-auto pt-9 lg:pt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mattis tortor ut tortor cursus, ac maximus tortor.
      </p>
      <div className='pb-3 xl:pb-9'>
        <p className='text-brand-green'>HEX: #b19cd9</p>
        <p className='text-brand-green'>RGB: rgb(177, 156, 217)</p>
        <p className='text-brand-green'>HSL: hsl(261, 45%, 73%)</p>
      </div>
      <label
        className='block text-base font-semibold w-3/4 mx-auto'
        htmlFor='usage'
      >
        Describe where do you plan to use this color?
      </label>
      <textarea
        id='usage'
        name='usage'
        className='w-[80%] max-h-48 px-3 py-2 resize-none overflow-y-auto border border-primary-white rounded-[20px] shadow-shape focus:outline-none mx-auto bg-primary-color'
        rows='4'
        onChange={handleChange}
        value={formData.usage}
        required
      />
      {usageEmpty && <p className='text-brand-red'>Cannot be empty! </p>}
      <Link
        to='/result'
        onClick={handleClick}
        className='py-3 px-7 bg-transparent text-brand-green border border-brand-green rounded-full hover:bg-primary-color hover:text-brand-red hover:border-brand-red hover:shadow-shape mx-auto transition-all duration-500'
      >
        Get Recommendations
      </Link>
    </>
  );
}

export default TextArea;
