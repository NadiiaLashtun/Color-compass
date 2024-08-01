function DisplayColourDescription({ color }) {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:text-left'>
      <div className='text-brand-light-green w-full sm:w-1/5 font-semibold'>
        <p>
          {color.hex} <br /> {color.name}
        </p>
      </div>
      <div className='w-full sm:w-4/5 text-sm'> {color.description}</div>
    </div>
  );
}

export default DisplayColourDescription;
