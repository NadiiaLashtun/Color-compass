import { Link } from 'react-router-dom';

function TextArea({
  handleClick,
  handleChange,
  formData,
  usageEmpty,
  hexColor,
  rgbColor,
  hslColor,
}) {
  const RGBColor = ({ rgbColor }) => {
    const { r, g, b } = rgbColor;

    return (
      <span>
        rgb(
        <span className='text-brand-red'>{r}</span>,
        <span className='text-brand-light-green'> {g}</span>,
        <span className='text-secondary-color'> {b}</span>)
      </span>
    );
  };

  const HSLColor = ({ hslColor }) => {
    const { h, s, l } = hslColor;

    return (
      <span>
        hsl(
        <span className='text-secondary-color'>{h}</span>,
        <span className='text-brand-light-green'> {s}%</span>,
        <span className='text-brand-red'> {l}%</span>)
      </span>
    );
  };

  return (
    <>
      <h2 className='absolute -top-9 lg:-top-2 xl:-top-4 left-[50%] lg:left-[72%]'>
        Choose your color
      </h2>

      <p className='w-[80%] mx-auto my-auto pt-9 lg:pt-5'>
        1. Pick your main color and generate perfect combinations with
        complementary, triadic, or analogous palettes.
      </p>

      <div className='pb-3 xl:pb-9 text-brand-green'>
        <p>HEX: {hexColor}</p>
        <p>
          RGB: <RGBColor rgbColor={rgbColor} />
        </p>
        <p>
          HSL: <HSLColor hslColor={hslColor} />
        </p>
      </div>

      <label
        className='block text-base w-3/4 mx-auto'
        htmlFor='usage'
      >
        2. AI crafts your perfect palette.
        <br />
        <span className='font-semibold'>
          Describe how you’ll use the color and get inspired.
        </span>
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
